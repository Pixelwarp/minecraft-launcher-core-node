# Class MojangClient

The mojang api client. Please referece https://wiki.vg/Mojang_API.

All the apis need user to authenticate the access token from microsoft.
## 🏭 Constructors

### constructor

```ts
new MojangClient(dispatcher: Dispatcher): MojangClient
```
#### Parameters

- **dispatcher**: `Dispatcher`
#### Return Type

- `MojangClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L197" target="_blank" rel="noreferrer">packages/user/mojang.ts:197</a>
</p>


## 🏷️ Properties

### dispatcher <Badge type="danger" text="private" /> <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L197" target="_blank" rel="noreferrer">packages/user/mojang.ts:197</a>
</p>


## 🔧 Methods

### checkGameOwnership

```ts
checkGameOwnership(token: string, signal: AbortSignal): Promise<MinecraftOwnershipResponse>
```
Return the owner ship list of the player with those token.
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MinecraftOwnershipResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L388" target="_blank" rel="noreferrer">packages/user/mojang.ts:388</a>
</p>


### checkNameAvailability

```ts
checkNameAvailability(name: string, token: string, signal: AbortSignal): Promise<NameAvailability>
```
#### Parameters

- **name**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<NameAvailability>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L230" target="_blank" rel="noreferrer">packages/user/mojang.ts:230</a>
</p>


### getNameChangeInformation

```ts
getNameChangeInformation(token: string): Promise<NameChangeInformation>
```
#### Parameters

- **token**: `string`
#### Return Type

- `Promise<NameChangeInformation>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L219" target="_blank" rel="noreferrer">packages/user/mojang.ts:219</a>
</p>


### getProfile

```ts
getProfile(token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L243" target="_blank" rel="noreferrer">packages/user/mojang.ts:243</a>
</p>


### getSecurityChallenges

```ts
getSecurityChallenges(token: string): Promise<MojangChallenge[]>
```
#### Parameters

- **token**: `string`
#### Return Type

- `Promise<MojangChallenge[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L350" target="_blank" rel="noreferrer">packages/user/mojang.ts:350</a>
</p>


### hideCape

```ts
hideCape(token: string, signal: AbortSignal): Promise<void>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L299" target="_blank" rel="noreferrer">packages/user/mojang.ts:299</a>
</p>


### resetSkin

```ts
resetSkin(token: string, signal: AbortSignal): Promise<void>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L285" target="_blank" rel="noreferrer">packages/user/mojang.ts:285</a>
</p>


### setName

```ts
setName(name: string, token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **name**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L199" target="_blank" rel="noreferrer">packages/user/mojang.ts:199</a>
</p>


### setSkin

```ts
setSkin(fileName: string, skin: string | Buffer, variant: "slim" | "classic", token: string, signal: AbortSignal): Promise<MinecraftProfileResponse>
```
#### Parameters

- **fileName**: `string`
- **skin**: `string | Buffer`
- **variant**: `"slim" | "classic"`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MinecraftProfileResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L255" target="_blank" rel="noreferrer">packages/user/mojang.ts:255</a>
</p>


### showCape

```ts
showCape(capeId: string, token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **capeId**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L313" target="_blank" rel="noreferrer">packages/user/mojang.ts:313</a>
</p>


### submitSecurityChallenges

```ts
submitSecurityChallenges(answers: MojangChallengeResponse[], token: string): Promise<void>
```
#### Parameters

- **answers**: `MojangChallengeResponse[]`
- **token**: `string`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L365" target="_blank" rel="noreferrer">packages/user/mojang.ts:365</a>
</p>


### verifySecurityLocation

```ts
verifySecurityLocation(token: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L334" target="_blank" rel="noreferrer">packages/user/mojang.ts:334</a>
</p>


