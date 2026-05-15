<?php
declare(strict_types=1);

// PlaystationStore SDK utility: prepare_body

class PlaystationStorePrepareBody
{
    public static function call(PlaystationStoreContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
