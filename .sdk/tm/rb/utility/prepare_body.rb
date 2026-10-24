# PlaystationStore SDK utility: prepare_body
require_relative 'media'
module PlaystationStoreUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return PlaystationStoreUtilities.raw_body(ctx.reqdata) if PlaystationStoreUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
