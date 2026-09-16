"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ImageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PLAYSTATION_STORE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PLAYSTATION_STORE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PlaystationStoreSDK.test();
        const ent = testsdk.Image();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PLAYSTATION_STORE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'image.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "image", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 999, "kind": "param", "name": "age", "orig": "age", "reqd": true, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "param", "name": "container_id", "orig": "country", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "cusa", "orig": "cusa", "reqd": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "param", "name": "language", "orig": "language", "reqd": true, "type": "`$STRING`", "index$": 3 }], "query": [{ "active": true, "kind": "query", "name": "bg_color", "orig": "bg_color", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "h", "orig": "h", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 100, "kind": "query", "name": "opacity", "orig": "opacity", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "platform", "orig": "platform", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "w", "orig": "w", "reqd": false, "type": "`$INTEGER`", "index$": 4 }] }, "contract": { "id": "GET /store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image", "json": "{\"operationId\":\"GetGameImage\",\"parameters\":[{\"description\":\"Two symbols country code to search in, i.e. 'en'\",\"in\":\"path\",\"name\":\"country\",\"required\":true,\"schema\":{\"description\":\"Country value\",\"enum\":[\"ae\",\"ar\",\"at\",\"au\",\"be\",\"bg\",\"br\",\"ca\",\"ch\",\"cl\",\"co\",\"cr\",\"cy\",\"cz\",\"de\",\"dk\",\"ec\",\"es\",\"fi\",\"fr\",\"gb\",\"gr\",\"gt\",\"hn\",\"hr\",\"hu\",\"ie\",\"in\",\"is\",\"it\",\"lu\",\"mt\",\"mx\",\"ni\",\"nl\",\"no\",\"nz\",\"pa\",\"pe\",\"pl\",\"pt\",\"py\",\"ro\",\"ru\",\"sa\",\"se\",\"si\",\"sk\",\"sv\",\"tr\",\"ua\",\"us\",\"uy\",\"za\"],\"type\":\"string\"}},{\"description\":\"Two symbols language code to search in, i.e. 'gb'\",\"in\":\"path\",\"name\":\"language\",\"required\":true,\"schema\":{\"description\":\"Language value\",\"enum\":[\"ar\",\"bg\",\"cs\",\"da\",\"de\",\"el\",\"en\",\"es\",\"fi\",\"fr\",\"hr\",\"hu\",\"is\",\"it\",\"nl\",\"no\",\"pl\",\"pt\",\"ro\",\"ru\",\"sk\",\"sl\",\"sv\",\"tr\",\"uk\"],\"type\":\"string\"}},{\"description\":\"User's age\",\"in\":\"path\",\"name\":\"age\",\"required\":true,\"schema\":{\"default\":999,\"format\":\"int32\",\"maximum\":999,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"CUSA code to search\",\"in\":\"path\",\"name\":\"cusa\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Width in px\",\"in\":\"query\",\"name\":\"w\",\"schema\":{\"format\":\"int32\",\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Height in px\",\"in\":\"query\",\"name\":\"h\",\"schema\":{\"format\":\"int32\",\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Background color\",\"in\":\"query\",\"name\":\"bg_color\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Opacity\",\"in\":\"query\",\"name\":\"opacity\",\"schema\":{\"default\":100,\"format\":\"int32\",\"maximum\":100,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Platform, i.e. 'chihiro'\",\"in\":\"query\",\"name\":\"platform\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg;charset=UTF-8\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successful operation\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error Response\",\"properties\":{\"cause\":{\"type\":\"string\"},\"codeName\":{\"type\":\"string\"},\"errorUUID\":{\"type\":\"string\"}},\"required\":[\"codeName\"],\"type\":\"object\"}}},\"description\":\"Invalid\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error Response\",\"properties\":{\"cause\":{\"type\":\"string\"},\"codeName\":{\"type\":\"string\"},\"errorUUID\":{\"type\":\"string\"}},\"required\":[\"codeName\"],\"type\":\"object\"}}},\"description\":\"No data found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image", "rename": { "param": { "country": "container_id" } }, "segments": [{ "lit": "store" }, { "lit": "api" }, { "lit": "chihiro" }, { "lit": "00_09_000" }, { "lit": "container" }, { "var": "container_id" }, { "var": "language" }, { "var": "age" }, { "var": "cusa" }, { "lit": "image" }], "select": { "exist": ["age", "bg_color", "container_id", "cusa", "h", "language", "opacity", "platform", "w"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["container"]] }, "key$": "image", "name__orig": "image", "Name": "Image", "name_": "image", "name-": "image", "NAME": "IMAGE", "index$": 1 }, { "active": true, "entity": "image", "key$": "BasicImageFlow", "kind": "basic", "name": "BasicImageFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "image_ref01", "srcdatavar": "image_ref01_data", "suffix": "_dt0" }, "match": { "age": "age01", "container_id": "container01", "id": "image01", "language": "language01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-image_ref01" } }], "index$": 0 }] }, 'Image');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let image_ref01_data = Object.values(setup.data.existing.image)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const image_ref01_ent = client.Image();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/image/ImageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PlaystationStoreSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['image01', 'image02', 'image03', 'container01', 'container02', 'container03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PLAYSTATION_STORE_TEST_IMAGE_ENTID': idmap,
        'PLAYSTATION_STORE_TEST_LIVE': 'FALSE',
        'PLAYSTATION_STORE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PLAYSTATION_STORE_TEST_IMAGE_ENTID'];
    const live = 'TRUE' === env.PLAYSTATION_STORE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PLAYSTATION_STORE_TEST_IMAGE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.PlaystationStoreSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ImageEntity.test.js.map