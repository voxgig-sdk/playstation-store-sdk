# PlaystationStore PHP SDK Reference

Complete API reference for the PlaystationStore PHP SDK.


## PlaystationStoreSDK

### Constructor

```php
require_once __DIR__ . '/playstation-store_sdk.php';

$client = new PlaystationStoreSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## GeoEntity

```php
$geo = $client->Geo();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Geo()->load(["id" => "geo_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GeoEntity`

Create a new `GeoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Image()->load(["id" => "image_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StoreEntity

```php
$store = $client->Store();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Store()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Store()->load(["id" => "store_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StoreEntity`

Create a new `StoreEntity` instance with the same client and
options.

#### `getName(): string`

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

