# PlaystationStore SDK utility: make_context
require_relative '../core/context'
module PlaystationStoreUtilities
  MakeContext = ->(ctxmap, basectx) {
    PlaystationStoreContext.new(ctxmap, basectx)
  }
end
