# PlaystationStore SDK

Query the PlayStation Store catalogue for game metadata, pricing, and artwork by region

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Playstation Store API

The Playstation Store API is an unofficial wrapper around the backend that powers Sony's [PlayStation Store](https://store.playstation.com/). It exposes the same catalogue data the storefront uses to render game listings, regional pricing, and artwork — surfaced here through a Swagger description rather than any officially documented developer programme.

What you can typically pull from the API:

- Game listings filtered by region, with paging via `size`, `start`, and `sort` (for example `release_date`) parameters
- Catalogue groupings such as newest releases per country store (e.g. Switzerland, US)
- Product metadata: titles, descriptions, release dates, and platform tags
- Pricing information for the requested storefront region
- Image URLs served from `image.api.playstation.com` for box art and promotional assets

Operational notes from community testing: the underlying endpoints respond in roughly 590 ms on average, CORS is enabled, and recent uptime has been reported at 100%. There is no documented authentication scheme or published rate limit — because this is an unofficial integration, treat both as subject to change without notice.

## Try it

**TypeScript**
```bash
npm install playstation-store
```

**Python**
```bash
pip install playstation-store-sdk
```

**PHP**
```bash
composer require voxgig/playstation-store-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/playstation-store-sdk/go
```

**Ruby**
```bash
gem install playstation-store-sdk
```

**Lua**
```bash
luarocks install playstation-store-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { PlaystationStoreSDK } from 'playstation-store'

const client = new PlaystationStoreSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o playstation-store-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "playstation-store": {
      "command": "/abs/path/to/playstation-store-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Geo** | Regional storefront selectors (for example country codes like `ch` for Switzerland or `us` for the United States) that scope catalogue, pricing, and language results. | `/kamaji/api/chihiro/00_09_000/geo` |
| **Image** | Product artwork and promotional imagery served from `image.api.playstation.com`, referenced by URL in catalogue responses. | `/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image` |
| **Store** | The PlayStation Store catalogue itself: game listings, metadata, and pricing accessed via paged queries with `size`, `start`, and `sort` parameters. | `/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from playstationstore_sdk import PlaystationStoreSDK

client = PlaystationStoreSDK({})


# Load a specific geo
geo, err = client.Geo(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'playstationstore_sdk.php';

$client = new PlaystationStoreSDK([]);


// Load a specific geo
[$geo, $err] = $client->Geo(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/playstation-store-sdk/go"

client := sdk.NewPlaystationStoreSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "PlaystationStore_sdk"

client = PlaystationStoreSDK.new({})


# Load a specific geo
geo, err = client.Geo(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("playstation-store_sdk")

local client = sdk.new({})


-- Load a specific geo
local geo, err = client:Geo(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = PlaystationStoreSDK.test()
const result = await client.Geo().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = PlaystationStoreSDK.test(None, None)
result, err = client.Geo(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = PlaystationStoreSDK::test(null, null);
[$result, $err] = $client->Geo(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Geo(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PlaystationStoreSDK.test(nil, nil)
result, err = client.Geo(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Geo(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Playstation Store API

- Upstream: [https://store.playstation.com/](https://store.playstation.com/)
- API docs: [https://freepublicapis.com/playstation-store-api](https://freepublicapis.com/playstation-store-api)

- This SDK is generated from an unofficial Swagger description of the PlayStation Store endpoints.
- PlayStation, the PlayStation Store, and all game catalogue content are trademarks of Sony Interactive Entertainment.
- No formal public terms accompany the unofficial spec; use is at your own risk and subject to Sony's terms for store.playstation.com.
- The SDK wrapper itself is published under the MIT licence.

---

Generated from the Playstation Store API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
