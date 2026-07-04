# PlaystationStore Golang SDK Reference

Complete API reference for the PlaystationStore Golang SDK.


## PlaystationStoreSDK

### Constructor

```go
func NewPlaystationStoreSDK(options map[string]any) *PlaystationStoreSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *PlaystationStoreSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *PlaystationStoreSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Geo(data map[string]any) PlaystationStoreEntity`

Create a new `Geo` entity instance. Pass `nil` for no initial data.

#### `Image(data map[string]any) PlaystationStoreEntity`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `Store(data map[string]any) PlaystationStoreEntity`

Create a new `Store` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GeoEntity

```go
geo := client.Geo(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Geo(nil).Load(map[string]any{"id": "geo_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageEntity

```go
image := client.Image(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Image(nil).Load(map[string]any{"id": "image_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StoreEntity

```go
store := client.Store(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Store(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Store(nil).Load(map[string]any{"id": "store_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StoreEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewPlaystationStoreSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

