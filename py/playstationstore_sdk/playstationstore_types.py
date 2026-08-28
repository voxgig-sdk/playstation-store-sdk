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


class ImageLoadMatchRequired(TypedDict):
    age: int
    container_id: str
    cusa: str
    language: str


class ImageLoadMatch(ImageLoadMatchRequired, total=False):
    bg_color: int
    h: int
    opacity: int
    platform: str
    w: int


class Store(TypedDict):
    age_limit: float
    attributes: dict
    container_type: str
    content_origin: float
    dob_required: bool
    id: str
    images: list
    links: list
    long_desc: str
    metadata: dict
    name: str
    promomedia: list
    restricted: bool
    revision: float
    scene_layout: dict
    size: float
    sku_links: list
    sort: str
    start: float
    template_def: dict
    timestamp: float
    total_results: float


class StoreLoadMatchRequired(TypedDict):
    age: int
    country: str
    language: str


class StoreLoadMatch(StoreLoadMatchRequired, total=False):
    cusa: str
    direction: str
    game_content_type: str
    game_demo: bool
    game_type: str
    genre: str
    platform: str
    price: str
    relationship: str
    release_date: str
    size: int
    sort: str
    start: int
    subtitle_lang: str
    top_category: str
    voice_lang: str
    search_string: str
