<?php
declare(strict_types=1);

// PlaystationStore SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PlaystationStoreMakeContext
{
    public static function call(array $ctxmap, ?PlaystationStoreContext $basectx): PlaystationStoreContext
    {
        return new PlaystationStoreContext($ctxmap, $basectx);
    }
}
