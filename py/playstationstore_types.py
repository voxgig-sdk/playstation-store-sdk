# Typed models for the PlaystationStore SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Geo(TypedDict):
    pass


class GeoLoadMatch(TypedDict):
    pass


class Image(TypedDict):
    pass


class ImageLoadMatch(TypedDict):
    age: int
    container_id: str
    cusa: str
    language: str


class StoreRequired(TypedDict):
    bucket: str
    container_type: str
    content_type: str
    default_sku: dict
    id: str
    image: list
    name: str
    playable_platform: list
    release_date: str
    restricted: bool
    revision: float
    short_name: str
    timestamp: float
    top_category: str
    url: str


class Store(StoreRequired, total=False):
    bundle_child_type_id: float
    cloud_only_platform: list
    game_content_type: str
    game_content_types_list: list
    parent_name: str
    provider_name: str


class StoreLoadMatch(TypedDict):
    age: int
    country: str
    cusa: str
    language: str


class StoreListMatch(TypedDict):
    age: int
    country: str
    language: str
    search_string: str
