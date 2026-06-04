# Store entity test

require "minitest/autorun"
require "json"
require_relative "../PlaystationStore_sdk"
require_relative "runner"

class StoreEntityTest < Minitest::Test
  def test_create_instance
    testsdk = PlaystationStoreSDK.test(nil, nil)
    ent = testsdk.Store(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = store_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "store." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set PLAYSTATIONSTORE_TEST_STORE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    store_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.store")))
    store_ref01_data = nil
    if store_ref01_data_raw.length > 0
      store_ref01_data = Helpers.to_map(store_ref01_data_raw[0][1])
    end

    # LIST
    store_ref01_ent = client.Store(nil)
    store_ref01_match = {
      "age" => setup[:idmap]["age01"],
      "country" => setup[:idmap]["country01"],
      "language" => setup[:idmap]["language01"],
      "search_string" => setup[:idmap]["search_string01"],
    }

    store_ref01_list_result, err = store_ref01_ent.list(store_ref01_match, nil)
    assert_nil err
    assert store_ref01_list_result.is_a?(Array)

    # LOAD
    store_ref01_match_dt0 = {
      "id" => store_ref01_data["id"],
    }
    store_ref01_data_dt0_loaded, err = store_ref01_ent.load(store_ref01_match_dt0, nil)
    assert_nil err
    store_ref01_data_dt0_load_result = Helpers.to_map(store_ref01_data_dt0_loaded)
    assert !store_ref01_data_dt0_load_result.nil?
    assert_equal store_ref01_data_dt0_load_result["id"], store_ref01_data["id"]

  end
end

def store_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "store", "StoreTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = PlaystationStoreSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["store01", "store02", "store03", "viewfinder01", "viewfinder02", "viewfinder03", "container01", "container02", "container03", "tumbler01", "tumbler02", "tumbler03", "age01", "country01", "language01", "search_string01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["PLAYSTATIONSTORE_TEST_STORE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "PLAYSTATIONSTORE_TEST_STORE_ENTID" => idmap,
    "PLAYSTATIONSTORE_TEST_LIVE" => "FALSE",
    "PLAYSTATIONSTORE_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["PLAYSTATIONSTORE_TEST_STORE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["PLAYSTATIONSTORE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = PlaystationStoreSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["PLAYSTATIONSTORE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["PLAYSTATIONSTORE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
