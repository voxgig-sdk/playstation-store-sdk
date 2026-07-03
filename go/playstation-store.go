package voxgigplaystationstoresdk

import (
	"github.com/voxgig-sdk/playstation-store-sdk/go/core"
	"github.com/voxgig-sdk/playstation-store-sdk/go/entity"
	"github.com/voxgig-sdk/playstation-store-sdk/go/feature"
	_ "github.com/voxgig-sdk/playstation-store-sdk/go/utility"
)

// Type aliases preserve external API.
type PlaystationStoreSDK = core.PlaystationStoreSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type PlaystationStoreEntity = core.PlaystationStoreEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type PlaystationStoreError = core.PlaystationStoreError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGeoEntityFunc = func(client *core.PlaystationStoreSDK, entopts map[string]any) core.PlaystationStoreEntity {
		return entity.NewGeoEntity(client, entopts)
	}
	core.NewImageEntityFunc = func(client *core.PlaystationStoreSDK, entopts map[string]any) core.PlaystationStoreEntity {
		return entity.NewImageEntity(client, entopts)
	}
	core.NewStoreEntityFunc = func(client *core.PlaystationStoreSDK, entopts map[string]any) core.PlaystationStoreEntity {
		return entity.NewStoreEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewPlaystationStoreSDK = core.NewPlaystationStoreSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewPlaystationStoreSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *PlaystationStoreSDK  { return NewPlaystationStoreSDK(nil) }
func Test() *PlaystationStoreSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
