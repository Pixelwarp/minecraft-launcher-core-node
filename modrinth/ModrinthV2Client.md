# Class ModrinthV2Client


## 🏭 Constructors

### constructor

```ts
new ModrinthV2Client(options: ModrinthClientOptions): ModrinthV2Client
```
#### Parameters

- **options**: `ModrinthClientOptions`
#### Return Type

- `ModrinthV2Client`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L185" target="_blank" rel="noreferrer">packages/modrinth/index.ts:185</a>
</p>


## 🏷️ Properties

### baseUrl <Badge type="danger" text="private" />

```ts
baseUrl: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L181" target="_blank" rel="noreferrer">packages/modrinth/index.ts:181</a>
</p>


### dispatcher <Badge type="danger" text="private" /> <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L182" target="_blank" rel="noreferrer">packages/modrinth/index.ts:182</a>
</p>


### headers

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L183" target="_blank" rel="noreferrer">packages/modrinth/index.ts:183</a>
</p>


## 🔧 Methods

### getCategoryTags

```ts
getCategoryTags(signal: AbortSignal): Promise<Category[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<Category[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L397" target="_blank" rel="noreferrer">packages/modrinth/index.ts:397</a>
</p>


### getGameVersionTags

```ts
getGameVersionTags(signal: AbortSignal): Promise<GameVersion[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<GameVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L414" target="_blank" rel="noreferrer">packages/modrinth/index.ts:414</a>
</p>


### getLatestProjectVersion

```ts
getLatestProjectVersion(sha1: string, __namedParameters: Object= {}, signal: AbortSignal): Promise<ProjectVersion>
```

#### Parameters

- **sha1**: `string`
- **__namedParameters**: `Object`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L357" target="_blank" rel="noreferrer">packages/modrinth/index.ts:357</a>
</p>


### getLatestVersionsFromHashes

```ts
getLatestVersionsFromHashes(hashes: string[], __namedParameters: Object= {}, signal: AbortSignal): Promise<Record<string, ProjectVersion>>
```

#### Parameters

- **hashes**: `string[]`
- **__namedParameters**: `Object`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Record<string, ProjectVersion>>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L333" target="_blank" rel="noreferrer">packages/modrinth/index.ts:333</a>
</p>


### getLicenseTags

```ts
getLicenseTags(signal: AbortSignal): Promise<License[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<License[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L380" target="_blank" rel="noreferrer">packages/modrinth/index.ts:380</a>
</p>


### getLoaderTags

```ts
getLoaderTags(signal: AbortSignal): Promise<Loader[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<Loader[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L431" target="_blank" rel="noreferrer">packages/modrinth/index.ts:431</a>
</p>


### getProject

```ts
getProject(projectId: string, signal: AbortSignal): Promise<Project>
```

#### Parameters

- **projectId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L217" target="_blank" rel="noreferrer">packages/modrinth/index.ts:217</a>
</p>


### getProjectTeamMembers

```ts
getProjectTeamMembers(projectId: string, signal: AbortSignal): Promise<TeamMember[]>
```

#### Parameters

- **projectId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<TeamMember[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L448" target="_blank" rel="noreferrer">packages/modrinth/index.ts:448</a>
</p>


### getProjectVersion

```ts
getProjectVersion(versionId: string, signal: AbortSignal): Promise<ProjectVersion>
```

#### Parameters

- **versionId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L273" target="_blank" rel="noreferrer">packages/modrinth/index.ts:273</a>
</p>


### getProjectVersions

```ts
getProjectVersions(projectId: string, __namedParameters: Object= {}, signal: AbortSignal): Promise<ProjectVersion[]>
```

#### Parameters

- **projectId**: `string`
- **__namedParameters**: `Object`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L253" target="_blank" rel="noreferrer">packages/modrinth/index.ts:253</a>
</p>


### getProjectVersionsByHash

```ts
getProjectVersionsByHash(hashes: string[], algorithm: string= 'sha1', signal: AbortSignal): Promise<Record<string, ProjectVersion>>
```

#### Parameters

- **hashes**: `string[]`
- **algorithm**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Record<string, ProjectVersion>>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L308" target="_blank" rel="noreferrer">packages/modrinth/index.ts:308</a>
</p>


### getProjectVersionsById

```ts
getProjectVersionsById(ids: string[], signal: AbortSignal): Promise<ProjectVersion[]>
```

#### Parameters

- **ids**: `string[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L290" target="_blank" rel="noreferrer">packages/modrinth/index.ts:290</a>
</p>


### getProjects

```ts
getProjects(projectIds: string[], signal: AbortSignal): Promise<Project[]>
```

#### Parameters

- **projectIds**: `string[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L235" target="_blank" rel="noreferrer">packages/modrinth/index.ts:235</a>
</p>


### getUser

```ts
getUser(id: string, signal: AbortSignal): Promise<User>
```

#### Parameters

- **id**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<User>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L465" target="_blank" rel="noreferrer">packages/modrinth/index.ts:465</a>
</p>


### getUserProjects

```ts
getUserProjects(id: string, signal: AbortSignal): Promise<Project[]>
```

#### Parameters

- **id**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L482" target="_blank" rel="noreferrer">packages/modrinth/index.ts:482</a>
</p>


### searchProjects

```ts
searchProjects(options: SearchProjectOptions, signal: AbortSignal): Promise<SearchResult>
```

#### Parameters

- **options**: `SearchProjectOptions`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<SearchResult>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L194" target="_blank" rel="noreferrer">packages/modrinth/index.ts:194</a>
</p>


