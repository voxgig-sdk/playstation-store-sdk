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
---@field bg_color? number
---@field h? number
---@field opacity? number
---@field platform? string
---@field w? number

---@class Store
---@field age_limit number
---@field attributes table
---@field container_type string
---@field content_origin number
---@field dob_required boolean
---@field id string
---@field images table
---@field links table
---@field long_desc string
---@field metadata table
---@field name string
---@field promomedia table
---@field restricted boolean
---@field revision number
---@field scene_layout table
---@field size number
---@field sku_links table
---@field sort string
---@field start number
---@field template_def table
---@field timestamp number
---@field total_results number

---@class StoreLoadMatch
---@field age number
---@field country string
---@field cusa? string
---@field language string
---@field direction? string
---@field game_content_type? string
---@field game_demo? boolean
---@field game_type? string
---@field genre? string
---@field platform? string
---@field price? string
---@field relationship? string
---@field release_date? string
---@field size? number
---@field sort? string
---@field start? number
---@field subtitle_lang? string
---@field top_category? string
---@field voice_lang? string
---@field search_string? string

local M = {}

return M
