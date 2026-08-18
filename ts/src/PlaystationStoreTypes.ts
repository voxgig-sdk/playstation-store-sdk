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
  age_limit: number
  attributes: Record<string, any>
  container_type: string
  content_origin: number
  dob_required: boolean
  id: string
  images: any[]
  links: any[]
  long_desc: string
  metadata: Record<string, any>
  name: string
  promomedia: any[]
  restricted: boolean
  revision: number
  scene_layout: Record<string, any>
  size: number
  sku_links: any[]
  sort: string
  start: number
  template_def: Record<string, any>
  timestamp: number
  total_results: number
}

export interface StoreLoadMatch {
  age: number
  country: string
  cusa?: string
  language: string
  search_string?: string
}

