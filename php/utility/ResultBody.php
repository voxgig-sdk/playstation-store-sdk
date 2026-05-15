<?php
declare(strict_types=1);

// PlaystationStore SDK utility: result_body

class PlaystationStoreResultBody
{
    public static function call(PlaystationStoreContext $ctx): ?PlaystationStoreResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
