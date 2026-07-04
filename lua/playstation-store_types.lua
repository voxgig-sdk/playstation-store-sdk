-- Typed models for the PlaystationStore SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Geo

---@class GeoLoadMatch

---@class Image

---@class ImageLoadMatch
---@field age number
---@field container_id string
---@field cusa string
---@field language string

---@class Store
---@field bucket string
---@field bundle_child_type_id? number
---@field cloud_only_platform? table
---@field container_type string
---@field content_type string
---@field default_sku table
---@field game_content_type? string
---@field game_content_types_list? table
---@field id string
---@field image table
---@field name string
---@field parent_name? string
---@field playable_platform table
---@field provider_name? string
---@field release_date string
---@field restricted boolean
---@field revision number
---@field short_name string
---@field timestamp number
---@field top_category string
---@field url string

---@class StoreLoadMatch
---@field age number
---@field country string
---@field cusa string
---@field language string

---@class StoreListMatch
---@field age number
---@field country string
---@field language string
---@field search_string string

local M = {}

return M
