# PlaystationStore Golang SDK



The Golang SDK for the PlaystationStore API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Geo(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/playstation-store-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/playstation-store-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/playstation-store-sdk/go=../playstation-store-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/playstation-store-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single geo — the value is the loaded record.
    geo, err := client.Geo(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(geo)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
geo, err := client.Geo(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = geo
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

geo, err := client.Geo(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(geo) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewPlaystationStoreSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
PLAYSTATION_STORE_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewPlaystationStoreSDK

```go
func NewPlaystationStoreSDK(options map[string]any) *PlaystationStoreSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *PlaystationStoreSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### PlaystationStoreSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Geo` | `(data map[string]any) PlaystationStoreEntity` | Create a Geo entity instance. |
| `Image` | `(data map[string]any) PlaystationStoreEntity` | Create an Image entity instance. |
| `Store` | `(data map[string]any) PlaystationStoreEntity` | Create a Store entity instance. |

### Entity interface (PlaystationStoreEntity)

All entities implement the `PlaystationStoreEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    geo, err := client.Geo(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // geo is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Geo

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/kamaji/api/chihiro/00_09_000/geo`

#### Image

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image`

#### Store

| Field | Description |
| --- | --- |
| `"bucket"` |  |
| `"bundle_child_type_id"` |  |
| `"cloud_only_platform"` |  |
| `"container_type"` |  |
| `"content_type"` |  |
| `"default_sku"` |  |
| `"game_content_type"` |  |
| `"game_content_types_list"` |  |
| `"id"` |  |
| `"image"` |  |
| `"name"` |  |
| `"parent_name"` |  |
| `"playable_platform"` |  |
| `"provider_name"` |  |
| `"release_date"` |  |
| `"restricted"` |  |
| `"revision"` |  |
| `"short_name"` |  |
| `"timestamp"` |  |
| `"top_category"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}`



## Entities


### Geo

Create an instance: `geo := client.Geo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
geo, err := client.Geo(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(geo) // the loaded record
```


### Image

Create an instance: `image := client.Image(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
image, err := client.Image(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(image) // the loaded record
```


### Store

Create an instance: `store := client.Store(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `string` |  |
| `bundle_child_type_id` | `float64` |  |
| `cloud_only_platform` | `[]any` |  |
| `container_type` | `string` |  |
| `content_type` | `string` |  |
| `default_sku` | `map[string]any` |  |
| `game_content_type` | `string` |  |
| `game_content_types_list` | `[]any` |  |
| `id` | `string` |  |
| `image` | `[]any` |  |
| `name` | `string` |  |
| `parent_name` | `string` |  |
| `playable_platform` | `[]any` |  |
| `provider_name` | `string` |  |
| `release_date` | `string` |  |
| `restricted` | `bool` |  |
| `revision` | `float64` |  |
| `short_name` | `string` |  |
| `timestamp` | `float64` |  |
| `top_category` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
store, err := client.Store(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(store) // the loaded record
```

#### Example: List

```go
stores, err := client.Store(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(stores) // the array of records
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/playstation-store-sdk/go/
├── playstation-store.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/playstation-store-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
geo := client.Geo(nil)
geo.Load(nil, nil)

// geo.Data() now returns the geo data from the last load
// geo.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
