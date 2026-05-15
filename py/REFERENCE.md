# PlaystationStore Python SDK Reference

Complete API reference for the PlaystationStore Python SDK.


## PlaystationStoreSDK

### Constructor

```python
from playstation-store_sdk import PlaystationStoreSDK

client = PlaystationStoreSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PlaystationStoreSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = PlaystationStoreSDK.test()
```


### Instance Methods

#### `Geo(data=None)`

Create a new `GeoEntity` instance. Pass `None` for no initial data.

#### `Image(data=None)`

Create a new `ImageEntity` instance. Pass `None` for no initial data.

#### `Store(data=None)`

Create a new `StoreEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## GeoEntity

```python
geo = client.Geo()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Geo().load({"id": "geo_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageEntity

```python
image = client.Image()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Image().load({"id": "image_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StoreEntity

```python
store = client.Store()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Store().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Store().load({"id": "store_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoreEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = PlaystationStoreSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

