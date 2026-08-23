# PlaystationStore SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "PlaystationStore",
            "slug": "playstation-store",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://store.playstation.com/",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "geo": {},
                "image": {},
                "store": {},
            },
        },
        "entity": {
      "geo": {
        "fields": [],
        "name": "geo",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/kamaji/api/chihiro/00_09_000/geo",
                "parts": [
                  "kamaji",
                  "api",
                  "chihiro",
                  "00_09_000",
                  "geo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "image": {
        "fields": [],
        "name": "image",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 999,
                      "kind": "param",
                      "name": "age",
                      "orig": "age",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "container_id",
                      "orig": "country",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "cusa",
                      "orig": "cusa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "language",
                      "orig": "language",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "bg_color",
                      "orig": "bg_color",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "h",
                      "orig": "h",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "opacity",
                      "orig": "opacity",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "w",
                      "orig": "w",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image",
                "parts": [
                  "store",
                  "api",
                  "chihiro",
                  "00_09_000",
                  "container",
                  "{container_id}",
                  "{language}",
                  "{age}",
                  "{cusa}",
                  "image",
                ],
                "rename": {
                  "param": {
                    "country": "container_id",
                  },
                },
                "select": {
                  "exist": [
                    "age",
                    "bg_color",
                    "container_id",
                    "cusa",
                    "h",
                    "language",
                    "opacity",
                    "platform",
                    "w",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "container",
            ],
          ],
        },
      },
      "store": {
        "fields": [
          {
            "name": "age_limit",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "attributes",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "container_type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "content_origin",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "dob_required",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "images",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "long_desc",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "metadata",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "promomedia",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "restricted",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "revision",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "scene_layout",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "size",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "sku_links",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "sort",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "start",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "template_def",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "timestamp",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "total_results",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "store",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 999,
                      "kind": "param",
                      "name": "age",
                      "orig": "age",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "country",
                      "orig": "country",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "cusa",
                      "orig": "cusa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "language",
                      "orig": "language",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_content_type",
                      "orig": "game_content_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_demo",
                      "orig": "game_demo",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "game_type",
                      "orig": "game_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "genre",
                      "orig": "genre",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "price",
                      "orig": "price",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "relationship",
                      "orig": "relationship",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "release_date",
                      "orig": "release_date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "subtitle_lang",
                      "orig": "subtitle_lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "top_category",
                      "orig": "top_category",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "voice_lang",
                      "orig": "voice_lang",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}",
                "parts": [
                  "store",
                  "api",
                  "chihiro",
                  "00_09_000",
                  "container",
                  "{country}",
                  "{language}",
                  "{age}",
                  "{cusa}",
                ],
                "select": {
                  "exist": [
                    "age",
                    "country",
                    "cusa",
                    "direction",
                    "game_content_type",
                    "game_demo",
                    "game_type",
                    "genre",
                    "language",
                    "platform",
                    "price",
                    "relationship",
                    "release_date",
                    "size",
                    "sort",
                    "start",
                    "subtitle_lang",
                    "top_category",
                    "voice_lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 999,
                      "kind": "param",
                      "name": "age",
                      "orig": "age",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "country",
                      "orig": "country",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "language",
                      "orig": "language",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "search_string",
                      "orig": "search_string",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_content_type",
                      "orig": "game_content_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_demo",
                      "orig": "game_demo",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "game_type",
                      "orig": "game_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "genre",
                      "orig": "genre",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "price",
                      "orig": "price",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "relationship",
                      "orig": "relationship",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "release_date",
                      "orig": "release_date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "subtitle_lang",
                      "orig": "subtitle_lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "top_category",
                      "orig": "top_category",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "voice_lang",
                      "orig": "voice_lang",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}",
                "parts": [
                  "store",
                  "api",
                  "chihiro",
                  "00_09_000",
                  "tumbler",
                  "{country}",
                  "{language}",
                  "{age}",
                  "{search_string}",
                ],
                "rename": {
                  "param": {
                    "searchString": "search_string",
                  },
                },
                "select": {
                  "exist": [
                    "age",
                    "country",
                    "direction",
                    "game_content_type",
                    "game_demo",
                    "game_type",
                    "genre",
                    "language",
                    "platform",
                    "price",
                    "relationship",
                    "release_date",
                    "search_string",
                    "size",
                    "sort",
                    "start",
                    "subtitle_lang",
                    "top_category",
                    "voice_lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 999,
                      "kind": "param",
                      "name": "age",
                      "orig": "age",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "country",
                      "orig": "country",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "cusa",
                      "orig": "cusa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "language",
                      "orig": "language",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/chihiro-api/viewfinder/{country}/{language}/{age}/{cusa}",
                "parts": [
                  "chihiro-api",
                  "viewfinder",
                  "{country}",
                  "{language}",
                  "{age}",
                  "{cusa}",
                ],
                "select": {
                  "exist": [
                    "age",
                    "country",
                    "cusa",
                    "direction",
                    "language",
                    "size",
                    "sort",
                    "start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "viewfinder",
            ],
            [
              "container",
            ],
            [
              "tumbler",
            ],
          ],
        },
      },
    },
    }
