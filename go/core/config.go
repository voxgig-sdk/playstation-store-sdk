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
			"slug": "playstation-store",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
								"kind": "http",
								"method": "GET",
								"orig": "/kamaji/api/chihiro/00_09_000/geo",
								"segments": []any{
									map[string]any{
										"lit": "kamaji",
									},
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "chihiro",
									},
									map[string]any{
										"lit": "00_09_000",
									},
									map[string]any{
										"lit": "geo",
									},
								},
								"parts": []any{
									"kamaji",
									"api",
									"chihiro",
									"00_09_000",
									"geo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image",
								"segments": []any{
									map[string]any{
										"lit": "store",
									},
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "chihiro",
									},
									map[string]any{
										"lit": "00_09_000",
									},
									map[string]any{
										"lit": "container",
									},
									map[string]any{
										"var": "container_id",
									},
									map[string]any{
										"var": "language",
									},
									map[string]any{
										"var": "age",
									},
									map[string]any{
										"var": "cusa",
									},
									map[string]any{
										"lit": "image",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "age",
											"orig": "age",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 999,
										},
										map[string]any{
											"name": "container_id",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "cusa",
											"orig": "cusa",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "bg_color",
											"orig": "bg_color",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "h",
											"orig": "h",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "opacity",
											"orig": "opacity",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "w",
											"orig": "w",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"store": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "age_limit",
						"title": "Age Limit",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "attributes",
						"title": "Attributes",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "container_type",
						"title": "Container Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "content_origin",
						"title": "Content Origin",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "dob_required",
						"title": "Dob Required",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "long_desc",
						"title": "Long Desc",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "promomedia",
						"title": "Promomedia",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "restricted",
						"title": "Restricted",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "revision",
						"title": "Revision",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "scene_layout",
						"title": "Scene Layout",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "sku_links",
						"title": "Sku Links",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "sort",
						"title": "Sort",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "start",
						"title": "Start",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "template_def",
						"title": "Template Def",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "total_results",
						"title": "Total Results",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"country",
						"language",
						"age",
						"cusa",
					},
					"sep": "/",
				},
				"name": "store",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}",
								"segments": []any{
									map[string]any{
										"lit": "store",
									},
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "chihiro",
									},
									map[string]any{
										"lit": "00_09_000",
									},
									map[string]any{
										"lit": "container",
									},
									map[string]any{
										"var": "country",
									},
									map[string]any{
										"var": "language",
									},
									map[string]any{
										"var": "age",
									},
									map[string]any{
										"var": "cusa",
									},
								},
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
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "age",
											"orig": "age",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 999,
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "cusa",
											"orig": "cusa",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_content_type",
											"orig": "game_content_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_demo",
											"orig": "game_demo",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_type",
											"orig": "game_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "price",
											"orig": "price",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "relationship",
											"orig": "relationship",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "release_date",
											"orig": "release_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "subtitle_lang",
											"orig": "subtitle_lang",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "top_category",
											"orig": "top_category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "voice_lang",
											"orig": "voice_lang",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}",
								"segments": []any{
									map[string]any{
										"lit": "store",
									},
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "chihiro",
									},
									map[string]any{
										"lit": "00_09_000",
									},
									map[string]any{
										"lit": "tumbler",
									},
									map[string]any{
										"var": "country",
									},
									map[string]any{
										"var": "language",
									},
									map[string]any{
										"var": "age",
									},
									map[string]any{
										"var": "search_string",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "age",
											"orig": "age",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 999,
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "search_string",
											"orig": "search_string",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_content_type",
											"orig": "game_content_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_demo",
											"orig": "game_demo",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "game_type",
											"orig": "game_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "price",
											"orig": "price",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "relationship",
											"orig": "relationship",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "release_date",
											"orig": "release_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "subtitle_lang",
											"orig": "subtitle_lang",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "top_category",
											"orig": "top_category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "voice_lang",
											"orig": "voice_lang",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/chihiro-api/viewfinder/{country}/{language}/{age}/{cusa}",
								"segments": []any{
									map[string]any{
										"lit": "chihiro-api",
									},
									map[string]any{
										"lit": "viewfinder",
									},
									map[string]any{
										"var": "country",
									},
									map[string]any{
										"var": "language",
									},
									map[string]any{
										"var": "age",
									},
									map[string]any{
										"var": "cusa",
									},
								},
								"parts": []any{
									"chihiro-api",
									"viewfinder",
									"{country}",
									"{language}",
									"{age}",
									"{cusa}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "age",
											"orig": "age",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 999,
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "cusa",
											"orig": "cusa",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "size",
											"orig": "size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
