
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { PlaystationStoreSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('StoreEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PLAYSTATIONSTORE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PLAYSTATIONSTORE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PlaystationStoreSDK.test()
    const ent = testsdk.Store()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PLAYSTATION_STORE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'store.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set PLAYSTATION_STORE_TEST_STORE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let store_ref01_data = Object.values(setup.data.existing.store)[0] as any

    // LIST
    const store_ref01_ent = client.Store()
    const store_ref01_match: any = {}
    store_ref01_match['age'] = setup.idmap['age01']
    store_ref01_match['country'] = setup.idmap['country01']
    store_ref01_match['language'] = setup.idmap['language01']
    store_ref01_match['search_string'] = setup.idmap['search_string01']

    const store_ref01_list = await store_ref01_ent.list(store_ref01_match)


    // LOAD
    const store_ref01_match_dt0: any = {}
    store_ref01_match_dt0.id = store_ref01_data.id
    const store_ref01_data_dt0 = await store_ref01_ent.load(store_ref01_match_dt0)
    assert(store_ref01_data_dt0.id === store_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/store/StoreTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PlaystationStoreSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['store01','store02','store03','viewfinder01','viewfinder02','viewfinder03','container01','container02','container03','tumbler01','tumbler02','tumbler03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['PLAYSTATION_STORE_TEST_STORE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'PLAYSTATION_STORE_TEST_STORE_ENTID': idmap,
    'PLAYSTATION_STORE_TEST_LIVE': 'FALSE',
    'PLAYSTATION_STORE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PLAYSTATION_STORE_TEST_STORE_ENTID']

  const live = 'TRUE' === env.PLAYSTATION_STORE_TEST_LIVE

  if (live) {
    client = new PlaystationStoreSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PLAYSTATION_STORE_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
