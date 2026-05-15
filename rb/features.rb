# PlaystationStore SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PlaystationStoreFeatures
  def self.make_feature(name)
    case name
    when "base"
      PlaystationStoreBaseFeature.new
    when "test"
      PlaystationStoreTestFeature.new
    else
      PlaystationStoreBaseFeature.new
    end
  end
end
