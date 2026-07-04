# PlaystationStore TypeScript SDK Reference

Complete API reference for the PlaystationStore TypeScript SDK.


## PlaystationStoreSDK

### Constructor

```ts
new PlaystationStoreSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PlaystationStoreSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PlaystationStoreSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PlaystationStoreSDK` instance in test mode.


### Instance Methods

#### `Geo(data?: object)`

Create a new `Geo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeoEntity` instance.

#### `Image(data?: object)`

Create a new `Image` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageEntity` instance.

#### `Store(data?: object)`

Create a new `Store` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StoreEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PlaystationStoreSDK.test()`.

**Returns:** `PlaystationStoreSDK` instance in test mode.


---

## GeoEntity

```ts
const geo = client.Geo()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Geo().load({ id: 'geo_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeoEntity` instance with the same client and
options.

#### `client()`

Return the parent `PlaystationStoreSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageEntity

```ts
const image = client.Image()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Image().load({ id: 'image_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `PlaystationStoreSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StoreEntity

```ts
const store = client.Store()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | ``$STRING`` | Yes |  |
| `bundle_child_type_id` | ``$NUMBER`` | No |  |
| `cloud_only_platform` | ``$ARRAY`` | No |  |
| `container_type` | ``$STRING`` | Yes |  |
| `content_type` | ``$STRING`` | Yes |  |
| `default_sku` | ``$OBJECT`` | Yes |  |
| `game_content_type` | ``$STRING`` | No |  |
| `game_content_types_list` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | Yes |  |
| `image` | ``$ARRAY`` | Yes |  |
| `name` | ``$STRING`` | Yes |  |
| `parent_name` | ``$STRING`` | No |  |
| `playable_platform` | ``$ARRAY`` | Yes |  |
| `provider_name` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | Yes |  |
| `restricted` | ``$BOOLEAN`` | Yes |  |
| `revision` | ``$NUMBER`` | Yes |  |
| `short_name` | ``$STRING`` | Yes |  |
| `timestamp` | ``$NUMBER`` | Yes |  |
| `top_category` | ``$STRING`` | Yes |  |
| `url` | ``$STRING`` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Store().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Store().load({ id: 'store_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StoreEntity` instance with the same client and
options.

#### `client()`

Return the parent `PlaystationStoreSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new PlaystationStoreSDK({
  feature: {
    test: { active: true },
  }
})
```

