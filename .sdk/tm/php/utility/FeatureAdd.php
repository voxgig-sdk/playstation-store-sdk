<?php
declare(strict_types=1);

// PlaystationStore SDK utility: feature_add

class PlaystationStoreFeatureAdd
{
    public static function call(PlaystationStoreContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
