<?php
declare(strict_types=1);

// PlaystationStore SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

PlaystationStoreUtility::setRegistrar(function (PlaystationStoreUtility $u): void {
    $u->clean = [PlaystationStoreClean::class, 'call'];
    $u->done = [PlaystationStoreDone::class, 'call'];
    $u->make_error = [PlaystationStoreMakeError::class, 'call'];
    $u->feature_add = [PlaystationStoreFeatureAdd::class, 'call'];
    $u->feature_hook = [PlaystationStoreFeatureHook::class, 'call'];
    $u->feature_init = [PlaystationStoreFeatureInit::class, 'call'];
    $u->fetcher = [PlaystationStoreFetcher::class, 'call'];
    $u->make_fetch_def = [PlaystationStoreMakeFetchDef::class, 'call'];
    $u->make_context = [PlaystationStoreMakeContext::class, 'call'];
    $u->make_options = [PlaystationStoreMakeOptions::class, 'call'];
    $u->make_request = [PlaystationStoreMakeRequest::class, 'call'];
    $u->make_response = [PlaystationStoreMakeResponse::class, 'call'];
    $u->make_result = [PlaystationStoreMakeResult::class, 'call'];
    $u->make_point = [PlaystationStoreMakePoint::class, 'call'];
    $u->make_spec = [PlaystationStoreMakeSpec::class, 'call'];
    $u->make_url = [PlaystationStoreMakeUrl::class, 'call'];
    $u->param = [PlaystationStoreParam::class, 'call'];
    $u->prepare_auth = [PlaystationStorePrepareAuth::class, 'call'];
    $u->prepare_body = [PlaystationStorePrepareBody::class, 'call'];
    $u->prepare_headers = [PlaystationStorePrepareHeaders::class, 'call'];
    $u->prepare_method = [PlaystationStorePrepareMethod::class, 'call'];
    $u->prepare_params = [PlaystationStorePrepareParams::class, 'call'];
    $u->prepare_path = [PlaystationStorePreparePath::class, 'call'];
    $u->prepare_query = [PlaystationStorePrepareQuery::class, 'call'];
    $u->result_basic = [PlaystationStoreResultBasic::class, 'call'];
    $u->result_body = [PlaystationStoreResultBody::class, 'call'];
    $u->result_headers = [PlaystationStoreResultHeaders::class, 'call'];
    $u->transform_request = [PlaystationStoreTransformRequest::class, 'call'];
    $u->transform_response = [PlaystationStoreTransformResponse::class, 'call'];
});
