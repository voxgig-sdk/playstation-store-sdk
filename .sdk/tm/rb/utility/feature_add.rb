# PlaystationStore SDK utility: feature_add
module PlaystationStoreUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
