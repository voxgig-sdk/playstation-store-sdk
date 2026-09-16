# PlaystationStore SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PlaystationStoreFeatures
  def self.make_feature(name)
    case name
    when "base"
      PlaystationStoreBaseFeature.new
    when "ratelimit"
      PlaystationStoreRatelimitFeature.new
    when "retry"
      PlaystationStoreRetryFeature.new
    when "test"
      PlaystationStoreTestFeature.new
    when "timeout"
      PlaystationStoreTimeoutFeature.new
    else
      PlaystationStoreBaseFeature.new
    end
  end
end
