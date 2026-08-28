# PlaystationStore Ruby SDK Reference

Complete API reference for the PlaystationStore Ruby SDK.


## PlaystationStoreSDK

### Constructor

```ruby
require_relative 'PlaystationStore_sdk'

client = PlaystationStoreSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PlaystationStoreSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = PlaystationStoreSDK.test
```


### Instance Methods

#### `Geo(data = nil)`

Create a new `Geo` entity instance. Pass `nil` for no initial data.

#### `Image(data = nil)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `Store(data = nil)`

Create a new `Store` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GeoEntity

```ruby
geo = client.Geo
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Geo.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageEntity

```ruby
image = client.Image
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Image.load({ "age" => 1, "container_id" => "container_id", "cusa" => "cusa", "language" => "language" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StoreEntity

```ruby
store = client.Store
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `age_limit` | `Float` | Yes |  |
| `attributes` | `Hash` | Yes |  |
| `container_type` | `String` | Yes |  |
| `content_origin` | `Float` | Yes |  |
| `dob_required` | `Boolean` | Yes |  |
| `id` | `String` | Yes |  |
| `images` | `Array` | Yes |  |
| `links` | `Array` | Yes |  |
| `long_desc` | `String` | Yes |  |
| `metadata` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `promomedia` | `Array` | Yes |  |
| `restricted` | `Boolean` | Yes |  |
| `revision` | `Float` | Yes |  |
| `scene_layout` | `Hash` | Yes |  |
| `size` | `Float` | Yes |  |
| `sku_links` | `Array` | Yes |  |
| `sort` | `String` | Yes |  |
| `start` | `Float` | Yes |  |
| `template_def` | `Hash` | Yes |  |
| `timestamp` | `Float` | Yes |  |
| `total_results` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Store.load({ "age" => 1, "country" => "country", "language" => "language" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StoreEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = PlaystationStoreSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

