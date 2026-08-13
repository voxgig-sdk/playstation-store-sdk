# PlaystationStore SDK feature factory

from playstationstore_sdk.feature.base_feature import PlaystationStoreBaseFeature
from playstationstore_sdk.feature.test_feature import PlaystationStoreTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PlaystationStoreBaseFeature(),
        "test": lambda: PlaystationStoreTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
