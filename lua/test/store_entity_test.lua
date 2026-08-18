-- Store entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("playstation-store_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("StoreEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Store(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = store_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "store." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set PLAYSTATION_STORE_TEST_STORE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local store_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.store")))
    local store_ref01_data = nil
    if #store_ref01_data_raw > 0 then
      store_ref01_data = helpers.to_map(store_ref01_data_raw[1][2])
    end

    -- LOAD
    local store_ref01_ent = client:Store(nil)
    local store_ref01_match_dt0 = {
      id = store_ref01_data["id"],
    }
    local store_ref01_data_dt0_loaded, err = store_ref01_ent:load(store_ref01_match_dt0, nil)
    assert.is_nil(err)
    local store_ref01_data_dt0_load_result = helpers.to_map(type(store_ref01_data_dt0_loaded) == 'table' and store_ref01_data_dt0_loaded.data_get and store_ref01_data_dt0_loaded:data_get() or store_ref01_data_dt0_loaded)
    assert.is_not_nil(store_ref01_data_dt0_load_result)
    assert.are.equal(store_ref01_data_dt0_load_result["id"], store_ref01_data["id"])

  end)
end)

function store_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/store/StoreTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read store test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "store01", "store02", "store03", "viewfinder01", "viewfinder02", "viewfinder03", "container01", "container02", "container03", "tumbler01", "tumbler02", "tumbler03", "age01", "country01", "language01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("PLAYSTATION_STORE_TEST_STORE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["PLAYSTATION_STORE_TEST_STORE_ENTID"] = idmap,
    ["PLAYSTATION_STORE_TEST_LIVE"] = "FALSE",
    ["PLAYSTATION_STORE_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["PLAYSTATION_STORE_TEST_STORE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["PLAYSTATION_STORE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["PLAYSTATION_STORE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["PLAYSTATION_STORE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
