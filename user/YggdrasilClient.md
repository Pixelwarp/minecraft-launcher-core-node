# Class YggdrasilClient

## 🏭 Constructors

### constructor

```ts
new YggdrasilClient(api: string, options: YggdrasilClientOptions): YggdrasilClient
```
Create client for official-like api endpoint
#### Parameters

- **api**: `string`
The official-like api endpoint
- **options**: `YggdrasilClientOptions`
#### Return Type

- `YggdrasilClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L100" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:100</a>
</p>


## 🏷️ Properties

### api <Badge type="tip" text="public" />

```ts
api: string
```
The official-like api endpoint
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L100" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:100</a>
</p>


### dispatcher <Badge type="warning" text="protected" /> <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L93" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:93</a>
</p>


### headers <Badge type="warning" text="protected" />

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L94" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:94</a>
</p>


## 🔧 Methods

### invalidate

```ts
invalidate(accessToken: string, clientToken: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **accessToken**: `string`
- **clientToken**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L119" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:119</a>
</p>


### login

```ts
login(__namedParameters: Object, signal: AbortSignal): Promise<YggrasilAuthentication>
```
#### Parameters

- **__namedParameters**: `Object`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<YggrasilAuthentication>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L132" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:132</a>
</p>


### refresh

```ts
refresh(__namedParameters: Object, signal: AbortSignal): Promise<YggrasilAuthentication>
```
#### Parameters

- **__namedParameters**: `Object`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<YggrasilAuthentication>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L158" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:158</a>
</p>


### validate

```ts
validate(accessToken: string, clientToken: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **accessToken**: `string`
- **clientToken**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L105" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:105</a>
</p>


