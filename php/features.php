<?php
declare(strict_types=1);

// PlaystationStore SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PlaystationStoreFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PlaystationStoreBaseFeature();
            case "test":
                return new PlaystationStoreTestFeature();
            default:
                return new PlaystationStoreBaseFeature();
        }
    }
}
