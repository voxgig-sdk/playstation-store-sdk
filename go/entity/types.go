// Typed models for the PlaystationStore SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Geo is the typed data model for the geo entity.
type Geo struct {
}

// GeoLoadMatch is the typed request payload for Geo.LoadTyped.
type GeoLoadMatch struct {
}

// Image is the typed data model for the image entity.
type Image struct {
}

// ImageLoadMatch is the typed request payload for Image.LoadTyped.
type ImageLoadMatch struct {
	Age int `json:"age"`
	ContainerId string `json:"container_id"`
	Cusa string `json:"cusa"`
	Language string `json:"language"`
}

// Store is the typed data model for the store entity.
type Store struct {
	Bucket string `json:"bucket"`
	BundleChildTypeId *float64 `json:"bundle_child_type_id,omitempty"`
	CloudOnlyPlatform *[]any `json:"cloud_only_platform,omitempty"`
	ContainerType string `json:"container_type"`
	ContentType string `json:"content_type"`
	DefaultSku map[string]any `json:"default_sku"`
	GameContentType *string `json:"game_content_type,omitempty"`
	GameContentTypesList *[]any `json:"game_content_types_list,omitempty"`
	Id string `json:"id"`
	Image []any `json:"image"`
	Name string `json:"name"`
	ParentName *string `json:"parent_name,omitempty"`
	PlayablePlatform []any `json:"playable_platform"`
	ProviderName *string `json:"provider_name,omitempty"`
	ReleaseDate string `json:"release_date"`
	Restricted bool `json:"restricted"`
	Revision float64 `json:"revision"`
	ShortName string `json:"short_name"`
	Timestamp float64 `json:"timestamp"`
	TopCategory string `json:"top_category"`
	Url string `json:"url"`
}

// StoreLoadMatch is the typed request payload for Store.LoadTyped.
type StoreLoadMatch struct {
	Age int `json:"age"`
	Country string `json:"country"`
	Cusa string `json:"cusa"`
	Language string `json:"language"`
}

// StoreListMatch is the typed request payload for Store.ListTyped.
type StoreListMatch struct {
	Age int `json:"age"`
	Country string `json:"country"`
	Language string `json:"language"`
	SearchString string `json:"search_string"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
