# PlaystationStore SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
                "segments": [
                  {
                    "lit": "kamaji",
                  },
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "chihiro",
                  },
                  {
                    "lit": "00_09_000",
                  },
                  {
                    "lit": "geo",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "kamaji",
                  "api",
                  "chihiro",
                  "00_09_000",
                  "geo",
                ],
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
                "rename": {
                  "param": {
                    "country": "container_id",
                  },
                },
                "segments": [
                  {
                    "lit": "store",
                  },
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "chihiro",
                  },
                  {
                    "lit": "00_09_000",
                  },
                  {
                    "lit": "container",
                  },
                  {
                    "var": "container_id",
                  },
                  {
                    "var": "language",
                  },
                  {
                    "var": "age",
                  },
                  {
                    "var": "cusa",
                  },
                  {
                    "lit": "image",
                  },
                ],
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
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "country",
            "language",
            "age",
            "cusa",
          ],
          "sep": "/",
        },
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
                "segments": [
                  {
                    "lit": "store",
                  },
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "chihiro",
                  },
                  {
                    "lit": "00_09_000",
                  },
                  {
                    "lit": "container",
                  },
                  {
                    "var": "country",
                  },
                  {
                    "var": "language",
                  },
                  {
                    "var": "age",
                  },
                  {
                    "var": "cusa",
                  },
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
                "rename": {
                  "param": {
                    "searchString": "search_string",
                  },
                },
                "segments": [
                  {
                    "lit": "store",
                  },
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "chihiro",
                  },
                  {
                    "lit": "00_09_000",
                  },
                  {
                    "lit": "tumbler",
                  },
                  {
                    "var": "country",
                  },
                  {
                    "var": "language",
                  },
                  {
                    "var": "age",
                  },
                  {
                    "var": "search_string",
                  },
                ],
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
                "segments": [
                  {
                    "lit": "chihiro-api",
                  },
                  {
                    "lit": "viewfinder",
                  },
                  {
                    "var": "country",
                  },
                  {
                    "var": "language",
                  },
                  {
                    "var": "age",
                  },
                  {
                    "var": "cusa",
                  },
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
                "parts": [
                  "chihiro-api",
                  "viewfinder",
                  "{country}",
                  "{language}",
                  "{age}",
                  "{cusa}",
                ],
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
