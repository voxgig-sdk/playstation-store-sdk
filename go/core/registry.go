package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGeoEntityFunc func(client *PlaystationStoreSDK, entopts map[string]any) PlaystationStoreEntity

var NewImageEntityFunc func(client *PlaystationStoreSDK, entopts map[string]any) PlaystationStoreEntity

var NewStoreEntityFunc func(client *PlaystationStoreSDK, entopts map[string]any) PlaystationStoreEntity

