# PlaystationStore SDK feature factory

from playstationstore_sdk.feature.base_feature import PlaystationStoreBaseFeature
from playstationstore_sdk.feature.test_feature import PlaystationStoreTestFeature


_FEATURES = {
    "base": lambda: PlaystationStoreBaseFeature(),
    "test": lambda: PlaystationStoreTestFeature(),
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
