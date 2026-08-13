<?php
declare(strict_types=1);

// Typed models for the PlaystationStore SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Geo entity data model. */
class Geo
{
}

/** Request payload for Geo#load. */
class GeoLoadMatch
{
}

/** Image entity data model. */
class Image
{
}

/** Request payload for Image#load. */
class ImageLoadMatch
{
    public int $age;
    public string $container_id;
    public string $cusa;
    public string $language;
}

/** Store entity data model. */
class Store
{
    public string $bucket;
    public ?float $bundleChildTypeId = null;
    public ?array $cloud_only_platform = null;
    public string $container_type;
    public string $content_type;
    public array $default_sku;
    public ?array $gameContentTypesList = null;
    public ?string $game_contentType = null;
    public string $id;
    public array $images;
    public string $name;
    public ?string $parent_name = null;
    public array $playable_platform;
    public ?string $provider_name = null;
    public string $release_date;
    public bool $restricted;
    public float $revision;
    public string $short_name;
    public float $timestamp;
    public string $top_category;
    public string $url;
}

/** Request payload for Store#load. */
class StoreLoadMatch
{
    public int $age;
    public string $country;
    public string $cusa;
    public string $language;
}

/** Request payload for Store#list. */
class StoreListMatch
{
    public int $age;
    public string $country;
    public string $language;
    public string $search_string;
}

