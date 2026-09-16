# PlaystationStore SDK feature factory

from playstationstore_sdk.feature.base_feature import PlaystationStoreBaseFeature
from playstationstore_sdk.feature.ratelimit_feature import PlaystationStoreRatelimitFeature
from playstationstore_sdk.feature.retry_feature import PlaystationStoreRetryFeature
from playstationstore_sdk.feature.test_feature import PlaystationStoreTestFeature
from playstationstore_sdk.feature.timeout_feature import PlaystationStoreTimeoutFeature


_FEATURES = {
    "base": lambda: PlaystationStoreBaseFeature(),
    "ratelimit": lambda: PlaystationStoreRatelimitFeature(),
    "retry": lambda: PlaystationStoreRetryFeature(),
    "test": lambda: PlaystationStoreTestFeature(),
    "timeout": lambda: PlaystationStoreTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
