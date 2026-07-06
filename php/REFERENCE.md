# PlaystationStore PHP SDK Reference

Complete API reference for the PlaystationStore PHP SDK.


## PlaystationStoreSDK

### Constructor

```php
require_once __DIR__ . '/playstationstore_sdk.php';

$client = new PlaystationStoreSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PlaystationStoreSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = PlaystationStoreSDK::test();
```


### Instance Methods

#### `Geo($data = null)`

Create a new `GeoEntity` instance. Pass `null` for no initial data.

#### `Image($data = null)`

Create a new `ImageEntity` instance. Pass `null` for no initial data.

#### `Store($data = null)`

Create a new `StoreEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): PlaystationStoreUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GeoEntity

```php
$geo = $client->Geo();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Geo()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeoEntity`

Create a new `GeoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Image()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StoreEntity

```php
$store = $client->Store();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | Yes |  |
| `bundle_child_type_id` | `float` | No |  |
| `cloud_only_platform` | `array` | No |  |
| `container_type` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `default_sku` | `array` | Yes |  |
| `game_content_type` | `string` | No |  |
| `game_content_types_list` | `array` | No |  |
| `id` | `string` | Yes |  |
| `image` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `parent_name` | `string` | No |  |
| `playable_platform` | `array` | Yes |  |
| `provider_name` | `string` | No |  |
| `release_date` | `string` | Yes |  |
| `restricted` | `bool` | Yes |  |
| `revision` | `float` | Yes |  |
| `short_name` | `string` | Yes |  |
| `timestamp` | `float` | Yes |  |
| `top_category` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Store()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Store()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StoreEntity`

Create a new `StoreEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new PlaystationStoreSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

