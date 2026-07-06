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
ImageLoadMatch = Struct.new(
  :age,
  :container_id,
  :cusa,
  :language,
  keyword_init: true
)

# Store entity data model.
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] bundle_child_type_id
#   @return [Float, nil]
#
# @!attribute [rw] cloud_only_platform
#   @return [Array, nil]
#
# @!attribute [rw] container_type
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] default_sku
#   @return [Hash]
#
# @!attribute [rw] game_content_type
#   @return [String, nil]
#
# @!attribute [rw] game_content_types_list
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parent_name
#   @return [String, nil]
#
# @!attribute [rw] playable_platform
#   @return [Array]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String]
#
# @!attribute [rw] restricted
#   @return [Boolean]
#
# @!attribute [rw] revision
#   @return [Float]
#
# @!attribute [rw] short_name
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [Float]
#
# @!attribute [rw] top_category
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Store = Struct.new(
  :bucket,
  :bundle_child_type_id,
  :cloud_only_platform,
  :container_type,
  :content_type,
  :default_sku,
  :game_content_type,
  :game_content_types_list,
  :id,
  :image,
  :name,
  :parent_name,
  :playable_platform,
  :provider_name,
  :release_date,
  :restricted,
  :revision,
  :short_name,
  :timestamp,
  :top_category,
  :url,
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
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
StoreLoadMatch = Struct.new(
  :age,
  :country,
  :cusa,
  :language,
  keyword_init: true
)

# Request payload for Store#list.
#
# @!attribute [rw] age
#   @return [Integer]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] search_string
#   @return [String]
StoreListMatch = Struct.new(
  :age,
  :country,
  :language,
  :search_string,
  keyword_init: true
)

