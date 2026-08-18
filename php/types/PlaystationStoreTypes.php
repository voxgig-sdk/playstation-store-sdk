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
    public float $age_limit;
    public array $attributes;
    public string $container_type;
    public float $content_origin;
    public bool $dob_required;
    public string $id;
    public array $images;
    public array $links;
    public string $long_desc;
    public array $metadata;
    public string $name;
    public array $promomedia;
    public bool $restricted;
    public float $revision;
    public array $scene_layout;
    public float $size;
    public array $sku_links;
    public string $sort;
    public float $start;
    public array $template_def;
    public float $timestamp;
    public float $total_results;
}

/** Request payload for Store#load. */
class StoreLoadMatch
{
    public int $age;
    public string $country;
    public ?string $cusa = null;
    public string $language;
    public ?string $search_string = null;
}

