# frozen_string_literal: true

# Typed models for the PlaystationStore SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Geo entity data model.
class Geo
end

# Request payload for Geo#load.
class GeoLoadMatch
end

# Image entity data model.
class Image
end

# Request payload for Image#load.
#
# @!attribute [rw] age
#   @return [Integer]
#
# @!attribute [rw] container_id
#   @return [String]
#
# @!attribute [rw] cusa
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] bg_color
#   @return [Integer, nil]
#
# @!attribute [rw] h
#   @return [Integer, nil]
#
# @!attribute [rw] opacity
#   @return [Integer, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] w
#   @return [Integer, nil]
ImageLoadMatch = Struct.new(
  :age,
  :container_id,
  :cusa,
  :language,
  :bg_color,
  :h,
  :opacity,
  :platform,
  :w,
  keyword_init: true
)

# Store entity data model.
#
# @!attribute [rw] age_limit
#   @return [Float]
#
# @!attribute [rw] attributes
#   @return [Hash]
#
# @!attribute [rw] container_type
#   @return [String]
#
# @!attribute [rw] content_origin
#   @return [Float]
#
# @!attribute [rw] dob_required
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] images
#   @return [Array]
#
# @!attribute [rw] links
#   @return [Array]
#
# @!attribute [rw] long_desc
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] promomedia
#   @return [Array]
#
# @!attribute [rw] restricted
#   @return [Boolean]
#
# @!attribute [rw] revision
#   @return [Float]
#
# @!attribute [rw] scene_layout
#   @return [Hash]
#
# @!attribute [rw] size
#   @return [Float]
#
# @!attribute [rw] sku_links
#   @return [Array]
#
# @!attribute [rw] sort
#   @return [String]
#
# @!attribute [rw] start
#   @return [Float]
#
# @!attribute [rw] template_def
#   @return [Hash]
#
# @!attribute [rw] timestamp
#   @return [Float]
#
# @!attribute [rw] total_results
#   @return [Float]
Store = Struct.new(
  :age_limit,
  :attributes,
  :container_type,
  :content_origin,
  :dob_required,
  :id,
  :images,
  :links,
  :long_desc,
  :metadata,
  :name,
  :promomedia,
  :restricted,
  :revision,
  :scene_layout,
  :size,
  :sku_links,
  :sort,
  :start,
  :template_def,
  :timestamp,
  :total_results,
  keyword_init: true
)

# Request payload for Store#load.
#
# @!attribute [rw] age
#   @return [Integer]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] cusa
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] game_content_type
#   @return [String, nil]
#
# @!attribute [rw] game_demo
#   @return [Boolean, nil]
#
# @!attribute [rw] game_type
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [String, nil]
#
# @!attribute [rw] relationship
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [Integer, nil]
#
# @!attribute [rw] subtitle_lang
#   @return [String, nil]
#
# @!attribute [rw] top_category
#   @return [String, nil]
#
# @!attribute [rw] voice_lang
#   @return [String, nil]
#
# @!attribute [rw] search_string
#   @return [String, nil]
StoreLoadMatch = Struct.new(
  :age,
  :country,
  :cusa,
  :language,
  :direction,
  :game_content_type,
  :game_demo,
  :game_type,
  :genre,
  :platform,
  :price,
  :relationship,
  :release_date,
  :size,
  :sort,
  :start,
  :subtitle_lang,
  :top_category,
  :voice_lang,
  :search_string,
  keyword_init: true
)

