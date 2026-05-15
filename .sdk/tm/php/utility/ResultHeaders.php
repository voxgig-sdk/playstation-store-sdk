<?php
declare(strict_types=1);

// PlaystationStore SDK utility: result_headers

class PlaystationStoreResultHeaders
{
    public static function call(PlaystationStoreContext $ctx): ?PlaystationStoreResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
