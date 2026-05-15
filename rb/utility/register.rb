# PlaystationStore SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PlaystationStoreUtility.registrar = ->(u) {
  u.clean = PlaystationStoreUtilities::Clean
  u.done = PlaystationStoreUtilities::Done
  u.make_error = PlaystationStoreUtilities::MakeError
  u.feature_add = PlaystationStoreUtilities::FeatureAdd
  u.feature_hook = PlaystationStoreUtilities::FeatureHook
  u.feature_init = PlaystationStoreUtilities::FeatureInit
  u.fetcher = PlaystationStoreUtilities::Fetcher
  u.make_fetch_def = PlaystationStoreUtilities::MakeFetchDef
  u.make_context = PlaystationStoreUtilities::MakeContext
  u.make_options = PlaystationStoreUtilities::MakeOptions
  u.make_request = PlaystationStoreUtilities::MakeRequest
  u.make_response = PlaystationStoreUtilities::MakeResponse
  u.make_result = PlaystationStoreUtilities::MakeResult
  u.make_point = PlaystationStoreUtilities::MakePoint
  u.make_spec = PlaystationStoreUtilities::MakeSpec
  u.make_url = PlaystationStoreUtilities::MakeUrl
  u.param = PlaystationStoreUtilities::Param
  u.prepare_auth = PlaystationStoreUtilities::PrepareAuth
  u.prepare_body = PlaystationStoreUtilities::PrepareBody
  u.prepare_headers = PlaystationStoreUtilities::PrepareHeaders
  u.prepare_method = PlaystationStoreUtilities::PrepareMethod
  u.prepare_params = PlaystationStoreUtilities::PrepareParams
  u.prepare_path = PlaystationStoreUtilities::PreparePath
  u.prepare_query = PlaystationStoreUtilities::PrepareQuery
  u.result_basic = PlaystationStoreUtilities::ResultBasic
  u.result_body = PlaystationStoreUtilities::ResultBody
  u.result_headers = PlaystationStoreUtilities::ResultHeaders
  u.transform_request = PlaystationStoreUtilities::TransformRequest
  u.transform_response = PlaystationStoreUtilities::TransformResponse
}
