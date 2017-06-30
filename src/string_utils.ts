export function writeString(out: ByteBuffer, str: string) {
    let strlen = str.length;
    let utflen = 0;
    let c: number;
    let count: number = 0;

    /* use charAt instead of copying String to char array */
    for (let i = 0; i < strlen; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            utflen++;
        } else if (c > 0x07FF) {
            utflen += 3;
        } else {
            utflen += 2;
        }
    }

    if (utflen > 65535)
        throw new Error(
            "encoded string too long: " + utflen + " bytes");

    let bytearr = new Uint8Array(utflen + 2);

    bytearr[count++] = ((utflen >>> 8) & 0xFF);
    bytearr[count++] = ((utflen >>> 0) & 0xFF);

    let i = 0;
    for (i = 0; i < strlen; i++) {
        c = str.charCodeAt(i);
        if (!((c >= 0x0001) && (c <= 0x007F))) break;
        bytearr[count++] = c;
    }

    for (; i < strlen; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            bytearr[count++] = c;

        } else if (c > 0x07FF) {
            bytearr[count++] = (0xE0 | ((c >> 12) & 0x0F));
            bytearr[count++] = (0x80 | ((c >> 6) & 0x3F));
            bytearr[count++] = (0x80 | ((c >> 0) & 0x3F));
        } else {
            bytearr[count++] = (0xC0 | ((c >> 6) & 0x1F));
            bytearr[count++] = (0x80 | ((c >> 0) & 0x3F));
        }
    }
    out.append(bytearr)
    // out.write(bytearr, 0, utflen + 2);
    return utflen + 2;
}
export function readString(buff: ByteBuffer) {
    let utflen = buff.readUint16()
    let bytearr: number[] = new Array<number>(utflen);
    let chararr = new Array<number>(utflen);

    let c, char2, char3;
    let count = 0;
    let chararr_count = 0;

    for (let i = 0; i < utflen; i++)
        bytearr[i] = (buff.readByte())

    while (count < utflen) {
        c = bytearr[count] & 0xff;
        if (c > 127) break;
        count++;
        chararr[chararr_count++] = c;
    }

    while (count < utflen) {
        c = bytearr[count] & 0xff;
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                /* 0xxxxxxx*/
                count++;
                chararr[chararr_count++] = c;
                break;
            case 12: case 13:
                /* 110x xxxx   10xx xxxx*/
                count += 2;
                if (count > utflen)
                    throw new Error(
                        "malformed input: partial character at end");
                char2 = bytearr[count - 1];
                if ((char2 & 0xC0) != 0x80)
                    throw new Error(
                        "malformed input around byte " + count);
                chararr[chararr_count++] = (((c & 0x1F) << 6) |
                    (char2 & 0x3F));
                break;
            case 14:
                /* 1110 xxxx  10xx xxxx  10xx xxxx */
                count += 3;
                if (count > utflen)
                    throw new Error(
                        "malformed input: partial character at end");
                char2 = bytearr[count - 2];
                char3 = bytearr[count - 1];
                if (((char2 & 0xC0) != 0x80) || ((char3 & 0xC0) != 0x80))
                    throw new Error(
                        "malformed input around byte " + (count - 1));
                chararr[chararr_count++] = (((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
            default:
                /* 10xx xxxx,  1111 xxxx */
                throw new Error(
                    "malformed input around byte " + count);
        }
    }
    // The number of chars produced may be less than utflen
    return chararr.map(i => String.fromCharCode(i)).join('')
}

export function startWith(string: string, prefix: string) {
    return string.match(new RegExp('^' + prefix))
}

export function endWith(string: string, postfix: string) {
    return string.match(new RegExp(postfix + '$'))
}

import * as http from 'http'
import * as https from 'https'
import * as urls from 'url'
import * as fs from 'fs'
import * as path from 'path';
import * as dir from 'mkdirp'

export async function DIR(path: string): Promise<string> {
    return new Promise<string>((acc, den) => {
        dir(path, (e, m) => {
            if (e) den()
            else acc(m)
        })
    })
}
export function DOWN(url: string, file: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        let stream = fs.createWriteStream(file)
        let u = urls.parse(url)
        let req
        if (u.protocol == 'https:')
            req = https.get({
                host: u.host,
                path: u.path
            }, res => res.pipe(stream)).on('error', e => { reject(e); fs.unlink(file) })
        else
            req = http.get({
                host: u.host,
                path: u.path
            }, res => res.pipe(stream)).on('error', e => { reject(e); fs.unlink(file) })
        stream.on('finish', () => { stream.close(); resolve() })
        req.end()
    });

}

export async function READ(path: string): Promise<string> {
    return new Promise<string>((res, rej) => {
        fs.readFile(path, (e, d) => {
            if (e) rej(e)
            else res(d.toString())
        })
    })
}

export async function GET(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        let u = urls.parse(url)
        let buf = ''
        let call = (res: http.IncomingMessage) => {
            res.setEncoding('utf-8')
            res.on('data', (data) => buf += data)
            res.on('end', () => resolve(buf))
        }
        let req
        if (u.protocol == 'https:') req = https.get({
            host: u.host,
            hostname: u.hostname,
            path: u.path,
        }, call)
        else req = http.get({
            host: u.host,
            hostname: u.hostname,
            path: u.path,
        }, call)
        req.on('error', (e) => reject(e))
        req.end()
    })
}
export function getString(url: string, callback: (result: string, error?: Error) => void) {
    let u = urls.parse(url)
    let buf = ''
    let call = (res: http.IncomingMessage) => {
        res.setEncoding('utf-8')
        res.on('data', (data) => buf += data)
        res.on('end', () => callback(buf))
    }
    let req
    if (u.protocol == 'https:') req = https.get({
        host: u.host,
        hostname: u.hostname,
        path: u.path,
    }, call)
    else req = http.get(url, call)
    req.on('error', (e) => callback('', e))
    req.end()
}