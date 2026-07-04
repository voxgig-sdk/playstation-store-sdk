# Typed models for the PlaystationStore SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Geo:
    pass


@dataclass
class GeoLoadMatch:
    pass


@dataclass
class Image:
    pass


@dataclass
class ImageLoadMatch:
    age: int
    container_id: str
    cusa: str
    language: str


@dataclass
class Store:
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
    bundle_child_type_id: Optional[float] = None
    cloud_only_platform: Optional[list] = None
    game_content_type: Optional[str] = None
    game_content_types_list: Optional[list] = None
    parent_name: Optional[str] = None
    provider_name: Optional[str] = None


@dataclass
class StoreLoadMatch:
    age: int
    country: str
    cusa: str
    language: str


@dataclass
class StoreListMatch:
    age: int
    country: str
    language: str
    search_string: str

