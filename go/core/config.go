package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "PlaystationStore",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://store.playstation.com/",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"geo": map[string]any{},
				"image": map[string]any{},
				"store": map[string]any{},
			},
		},
		"entity": map[string]any{
			"geo": map[string]any{
				"fields": []any{},
				"name": "geo",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/kamaji/api/chihiro/00_09_000/geo",
								"parts": []any{
									"kamaji",
									"api",
									"chihiro",
									"00_09_000",
									"geo",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{},
				"name": "image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 999,
											"kind": "param",
											"name": "age",
											"orig": "age",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "container_id",
											"orig": "country",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "cusa",
											"orig": "cusa",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "bg_color",
											"orig": "bg_color",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "h",
											"orig": "h",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "opacity",
											"orig": "opacity",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "w",
											"orig": "w",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image",
								"parts": []any{
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
								},
								"rename": map[string]any{
									"param": map[string]any{
										"country": "container_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"age",
										"bg_color",
										"container_id",
										"cusa",
										"h",
										"language",
										"opacity",
										"platform",
										"w",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"container",
						},
					},
				},
			},
			"store": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "age_limit",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "attributes",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "container_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_origin",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "dob_required",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "long_desc",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "promomedia",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "restricted",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "revision",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scene_layout",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "size",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sku_links",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sort",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "start",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "template_def",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "timestamp",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "total_results",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "store",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 999,
											"kind": "param",
											"name": "age",
											"orig": "age",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "country",
											"orig": "country",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "cusa",
											"orig": "cusa",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_content_type",
											"orig": "game_content_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_demo",
											"orig": "game_demo",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_type",
											"orig": "game_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "price",
											"orig": "price",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "relationship",
											"orig": "relationship",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "release_date",
											"orig": "release_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "subtitle_lang",
											"orig": "subtitle_lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "top_category",
											"orig": "top_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "voice_lang",
											"orig": "voice_lang",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}",
								"parts": []any{
									"store",
									"api",
									"chihiro",
									"00_09_000",
									"container",
									"{country}",
									"{language}",
									"{age}",
									"{cusa}",
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 999,
											"kind": "param",
											"name": "age",
											"orig": "age",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "country",
											"orig": "country",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "search_string",
											"orig": "search_string",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_content_type",
											"orig": "game_content_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_demo",
											"orig": "game_demo",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "game_type",
											"orig": "game_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "price",
											"orig": "price",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "relationship",
											"orig": "relationship",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "release_date",
											"orig": "release_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "subtitle_lang",
											"orig": "subtitle_lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "top_category",
											"orig": "top_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "voice_lang",
											"orig": "voice_lang",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}",
								"parts": []any{
									"store",
									"api",
									"chihiro",
									"00_09_000",
									"tumbler",
									"{country}",
									"{language}",
									"{age}",
									"{search_string}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"searchString": "search_string",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 999,
											"kind": "param",
											"name": "age",
											"orig": "age",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "country",
											"orig": "country",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "cusa",
											"orig": "cusa",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/chihiro-api/viewfinder/{country}/{language}/{age}/{cusa}",
								"parts": []any{
									"chihiro-api",
									"viewfinder",
									"{country}",
									"{language}",
									"{age}",
									"{cusa}",
								},
								"select": map[string]any{
									"exist": []any{
										"age",
										"country",
										"cusa",
										"direction",
										"language",
										"size",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"viewfinder",
						},
						[]any{
							"container",
						},
						[]any{
							"tumbler",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
