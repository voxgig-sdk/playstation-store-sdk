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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "image", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 999, "k": "param", "n": "age", "or": "age", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "container_id", "or": "country", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "cusa", "or": "cusa", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "language", "or": "language", "r": true, "t": "`$STRING`", "index$": 3 }], "query": [{ "a": true, "k": "query", "n": "bg_color", "or": "bg_color", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "h", "or": "h", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 100, "k": "query", "n": "opacity", "or": "opacity", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "platform", "or": "platform", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "w", "or": "w", "r": false, "t": "`$INTEGER`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image", "q": { "exist": ["age", "bg_color", "container_id", "cusa", "h", "language", "opacity", "platform", "w"] }, "r": { "param": { "country": "container_id" } }, "s": [{ "lit": "store" }, { "lit": "api" }, { "lit": "chihiro" }, { "lit": "00_09_000" }, { "lit": "container" }, { "var": "container_id" }, { "var": "language" }, { "var": "age" }, { "var": "cusa" }, { "lit": "image" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "image", "name__orig": "image", "Name": "Image", "name_": "image", "name-": "image", "NAME": "IMAGE", "index$": 1 }, { "active": true, "entity": "image", "key$": "BasicImageFlow", "kind": "basic", "name": "BasicImageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "image_ref01", "srcdatavar": "image_ref01_data", "suffix": "_dt0" }, "m": { "age": "age01", "container_id": "container01", "id": "image01", "language": "language01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-image_ref01" } }], "index$": 0 }] }, 'Image', { "GET /store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image": { "protocol": "http", "operationId": "GetGameImage", "responses": { "200": { "description": "Successful operation", "content": { "image/jpeg;charset=UTF-8": { "schema": { "type": "string", "format": "binary" } } } }, "400": { "description": "Invalid", "content": { "application/json": { "schema": { "required": ["codeName"], "type": "object", "properties": { "codeName": { "type": "string" }, "cause": { "type": "string" }, "errorUUID": { "type": "string" } }, "description": "Error Response", "x-ref": "#/components/schemas/ErrorResponse" } } } }, "404": { "description": "No data found", "content": { "application/json": { "schema": { "required": ["codeName"], "type": "object", "properties": { "codeName": { "type": "string" }, "cause": { "type": "string" }, "errorUUID": { "type": "string" } }, "description": "Error Response", "x-ref": "#/components/schemas/ErrorResponse" } } } } }, "parameters": [{ "name": "country", "in": "path", "description": "Two symbols country code to search in, i.e. 'en'", "required": true, "schema": { "type": "string", "description": "Country value", "enum": ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cl", "co", "cr", "cy", "cz", "de", "dk", "ec", "es", "fi", "fr", "gb", "gr", "gt", "hn", "hr", "hu", "ie", "in", "is", "it", "lu", "mt", "mx", "ni", "nl", "no", "nz", "pa", "pe", "pl", "pt", "py", "ro", "ru", "sa", "se", "si", "sk", "sv", "tr", "ua", "us", "uy", "za"], "x-ref": "#/components/schemas/Country" }, "index$": 0 }, { "name": "language", "in": "path", "description": "Two symbols language code to search in, i.e. 'gb'", "required": true, "schema": { "type": "string", "description": "Language value", "enum": ["ar", "bg", "cs", "da", "de", "el", "en", "es", "fi", "fr", "hr", "hu", "is", "it", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "tr", "uk"], "x-ref": "#/components/schemas/Language" }, "index$": 1 }, { "name": "age", "in": "path", "description": "User's age", "required": true, "schema": { "type": "integer", "format": "int32", "minimum": 0, "maximum": 999, "default": 999 }, "index$": 2 }, { "name": "cusa", "in": "path", "description": "CUSA code to search", "required": true, "schema": { "type": "string" }, "index$": 3 }, { "name": "w", "in": "query", "description": "Width in px", "schema": { "minimum": 0, "type": "integer", "format": "int32" }, "index$": 4 }, { "name": "h", "in": "query", "description": "Height in px", "schema": { "minimum": 0, "type": "integer", "format": "int32" }, "index$": 5 }, { "name": "bg_color", "in": "query", "description": "Background color", "schema": { "minimum": 0, "type": "integer" }, "index$": 6 }, { "name": "opacity", "in": "query", "description": "Opacity", "schema": { "maximum": 100, "minimum": 0, "type": "integer", "format": "int32", "default": 100 }, "index$": 7 }, { "name": "platform", "in": "query", "description": "Platform, i.e. 'chihiro'", "schema": { "type": "string" }, "index$": 8 }], "securitySource": "unspecified" } });
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
    let idmap = transform(['image01', 'image02', 'image03', 'age01', 'container01', 'language01'], {
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