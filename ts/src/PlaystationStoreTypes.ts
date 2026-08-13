// Typed models for the PlaystationStore SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Geo {
}

export interface GeoLoadMatch {
}

export interface Image {
}

export interface ImageLoadMatch {
  age: number
  container_id: string
  cusa: string
  language: string
}

export interface Store {
  bucket: string
  bundleChildTypeId?: number
  cloud_only_platform?: any[]
  container_type: string
  content_type: string
  default_sku: Record<string, any>
  gameContentTypesList?: any[]
  game_contentType?: string
  id: string
  images: any[]
  name: string
  parent_name?: string
  playable_platform: any[]
  provider_name?: string
  release_date: string
  restricted: boolean
  revision: number
  short_name: string
  timestamp: number
  top_category: string
  url: string
}

export interface StoreLoadMatch {
  age: number
  country: string
  cusa: string
  language: string
}

export interface StoreListMatch {
  age: number
  country: string
  language: string
  search_string: string
}

