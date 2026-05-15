# ProjectName SDK exists test

import pytest
from playstationstore_sdk import PlaystationStoreSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PlaystationStoreSDK.test(None, None)
        assert testsdk is not None
