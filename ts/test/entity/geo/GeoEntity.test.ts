

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PlaystationStoreSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GeoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PLAYSTATION_STORE_TEST_LIVE=TRUE.
  afterEach(liveDelay('PLAYSTATION_STORE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PlaystationStoreSDK.test()
    const ent = testsdk.Geo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PLAYSTATION_STORE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'geo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"geo","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /kamaji/api/chihiro/00_09_000/geo","json":"{\"operationId\":\"GetGeo\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{},\"description\":\"Success\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error Response\",\"properties\":{\"cause\":{\"type\":\"string\"},\"codeName\":{\"type\":\"string\"},\"errorUUID\":{\"type\":\"string\"}},\"required\":[\"codeName\"],\"type\":\"object\"}}},\"description\":\"Invalid\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/kamaji/api/chihiro/00_09_000/geo","segments":[{"lit":"kamaji"},{"lit":"api"},{"lit":"chihiro"},{"lit":"00_09_000"},{"lit":"geo"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"geo","name__orig":"geo","Name":"Geo","name_":"geo","name-":"geo","NAME":"GEO","index$":0}, {"active":true,"entity":"geo","key$":"BasicGeoFlow","kind":"basic","name":"BasicGeoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"geo_ref01","srcdatavar":"geo_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-geo_ref01"}}],"index$":0}]}, 'Geo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let geo_ref01_data = Object.values(setup.data.existing.geo)[0] as any

    // LOAD
    const geo_ref01_ent = client.Geo()
    const geo_ref01_match_dt0: any = {}
    const geo_ref01_data_dt0 = (await geo_ref01_ent.load(geo_ref01_match_dt0)).data()
    assert(null != geo_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/geo/GeoTestData.json')

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
    ['geo01','geo02','geo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PLAYSTATION_STORE_TEST_GEO_ENTID': idmap,
    'PLAYSTATION_STORE_TEST_LIVE': 'FALSE',
    'PLAYSTATION_STORE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PLAYSTATION_STORE_TEST_GEO_ENTID']

  const live = 'TRUE' === env.PLAYSTATION_STORE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PLAYSTATION_STORE_TEST_GEO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PlaystationStoreSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
