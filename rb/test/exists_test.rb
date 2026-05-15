# PlaystationStore SDK exists test

require "minitest/autorun"
require_relative "../PlaystationStore_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PlaystationStoreSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
