"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'PlaystationStore',
        slug: "playstation-store",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://store.playstation.com/",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            geo: {},
            image: {},
            store: {},
        }
    };
    entity = {
        "geo": {
            "fields": [],
            "name": "geo",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/kamaji/api/chihiro/00_09_000/geo",
                            "segments": [
                                {
                                    "lit": "kamaji"
                                },
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "chihiro"
                                },
                                {
                                    "lit": "00_09_000"
                                },
                                {
                                    "lit": "geo"
                                }
                            ],
                            "parts": [
                                "kamaji",
                                "api",
                                "chihiro",
                                "00_09_000",
                                "geo"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image",
                            "segments": [
                                {
                                    "lit": "store"
                                },
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "chihiro"
                                },
                                {
                                    "lit": "00_09_000"
                                },
                                {
                                    "lit": "container"
                                },
                                {
                                    "var": "container_id"
                                },
                                {
                                    "var": "language"
                                },
                                {
                                    "var": "age"
                                },
                                {
                                    "var": "cusa"
                                },
                                {
                                    "lit": "image"
                                }
                            ],
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
                                "image"
                            ],
                            "rename": {
                                "param": {
                                    "country": "container_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "age",
                                        "orig": "age",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 999
                                    },
                                    {
                                        "name": "container_id",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "cusa",
                                        "orig": "cusa",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "bg_color",
                                        "orig": "bg_color",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "h",
                                        "orig": "h",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "opacity",
                                        "orig": "opacity",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    },
                                    {
                                        "name": "platform",
                                        "orig": "platform",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "w",
                                        "orig": "w",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
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
                                    "w"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "store": {
            "fields": [
                {
                    "name": "age_limit",
                    "title": "Age Limit",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "attributes",
                    "title": "Attributes",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "container_type",
                    "title": "Container Type",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "content_origin",
                    "title": "Content Origin",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "dob_required",
                    "title": "Dob Required",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "images",
                    "title": "Images",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "links",
                    "title": "Links",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "long_desc",
                    "title": "Long Desc",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "metadata",
                    "title": "Metadata",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "promomedia",
                    "title": "Promomedia",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "restricted",
                    "title": "Restricted",
                    "type": "`$BOOLEAN`",
                    "req": true
                },
                {
                    "name": "revision",
                    "title": "Revision",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "scene_layout",
                    "title": "Scene Layout",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "size",
                    "title": "Size",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "sku_links",
                    "title": "Sku Links",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "sort",
                    "title": "Sort",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "start",
                    "title": "Start",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "template_def",
                    "title": "Template Def",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "timestamp",
                    "title": "Timestamp",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "total_results",
                    "title": "Total Results",
                    "type": "`$NUMBER`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "country",
                    "language",
                    "age",
                    "cusa"
                ],
                "sep": "/"
            },
            "name": "store",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}",
                            "segments": [
                                {
                                    "lit": "store"
                                },
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "chihiro"
                                },
                                {
                                    "lit": "00_09_000"
                                },
                                {
                                    "lit": "container"
                                },
                                {
                                    "var": "country"
                                },
                                {
                                    "var": "language"
                                },
                                {
                                    "var": "age"
                                },
                                {
                                    "var": "cusa"
                                }
                            ],
                            "parts": [
                                "store",
                                "api",
                                "chihiro",
                                "00_09_000",
                                "container",
                                "{country}",
                                "{language}",
                                "{age}",
                                "{cusa}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "age",
                                        "orig": "age",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 999
                                    },
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "cusa",
                                        "orig": "cusa",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_content_type",
                                        "orig": "game_content_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_demo",
                                        "orig": "game_demo",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_type",
                                        "orig": "game_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "genre",
                                        "orig": "genre",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "platform",
                                        "orig": "platform",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "price",
                                        "orig": "price",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "relationship",
                                        "orig": "relationship",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "release_date",
                                        "orig": "release_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "subtitle_lang",
                                        "orig": "subtitle_lang",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "top_category",
                                        "orig": "top_category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "voice_lang",
                                        "orig": "voice_lang",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
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
                                    "voice_lang"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}",
                            "segments": [
                                {
                                    "lit": "store"
                                },
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "chihiro"
                                },
                                {
                                    "lit": "00_09_000"
                                },
                                {
                                    "lit": "tumbler"
                                },
                                {
                                    "var": "country"
                                },
                                {
                                    "var": "language"
                                },
                                {
                                    "var": "age"
                                },
                                {
                                    "var": "search_string"
                                }
                            ],
                            "parts": [
                                "store",
                                "api",
                                "chihiro",
                                "00_09_000",
                                "tumbler",
                                "{country}",
                                "{language}",
                                "{age}",
                                "{search_string}"
                            ],
                            "rename": {
                                "param": {
                                    "searchString": "search_string"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "age",
                                        "orig": "age",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 999
                                    },
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "search_string",
                                        "orig": "search_string",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_content_type",
                                        "orig": "game_content_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_demo",
                                        "orig": "game_demo",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_type",
                                        "orig": "game_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "genre",
                                        "orig": "genre",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "platform",
                                        "orig": "platform",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "price",
                                        "orig": "price",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "relationship",
                                        "orig": "relationship",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "release_date",
                                        "orig": "release_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "subtitle_lang",
                                        "orig": "subtitle_lang",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "top_category",
                                        "orig": "top_category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "voice_lang",
                                        "orig": "voice_lang",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
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
                                    "voice_lang"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/chihiro-api/viewfinder/{country}/{language}/{age}/{cusa}",
                            "segments": [
                                {
                                    "lit": "chihiro-api"
                                },
                                {
                                    "lit": "viewfinder"
                                },
                                {
                                    "var": "country"
                                },
                                {
                                    "var": "language"
                                },
                                {
                                    "var": "age"
                                },
                                {
                                    "var": "cusa"
                                }
                            ],
                            "parts": [
                                "chihiro-api",
                                "viewfinder",
                                "{country}",
                                "{language}",
                                "{age}",
                                "{cusa}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "age",
                                        "orig": "age",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 999
                                    },
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "cusa",
                                        "orig": "cusa",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "size",
                                        "orig": "size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "age",
                                    "country",
                                    "cusa",
                                    "direction",
                                    "language",
                                    "size",
                                    "sort",
                                    "start"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map