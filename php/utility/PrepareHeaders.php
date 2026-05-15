<?php
declare(strict_types=1);

// PlaystationStore SDK utility: prepare_headers

class PlaystationStorePrepareHeaders
{
    public static function call(PlaystationStoreContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
