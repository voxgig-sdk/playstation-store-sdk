package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/playstation-store-sdk/go"
	"github.com/voxgig-sdk/playstation-store-sdk/go/core"

	vs "github.com/voxgig-sdk/playstation-store-sdk/go/utility/struct"
)

func TestStoreEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Store(nil)
		if ent == nil {
			t.Fatal("expected non-nil StoreEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := storeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "store." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set PLAYSTATIONSTORE_TEST_STORE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		storeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.store", setup.data)))
		var storeRef01Data map[string]any
		if len(storeRef01DataRaw) > 0 {
			storeRef01Data = core.ToMapAny(storeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = storeRef01Data

		// LIST
		storeRef01Ent := client.Store(nil)
		storeRef01Match := map[string]any{
			"age": setup.idmap["age01"],
			"country": setup.idmap["country01"],
			"language": setup.idmap["language01"],
			"search_string": setup.idmap["search_string01"],
		}

		storeRef01ListResult, err := storeRef01Ent.List(storeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, storeRef01ListOk := storeRef01ListResult.([]any)
		if !storeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", storeRef01ListResult)
		}

		// LOAD
		storeRef01MatchDt0 := map[string]any{
			"id": storeRef01Data["id"],
		}
		storeRef01DataDt0Loaded, err := storeRef01Ent.Load(storeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		storeRef01DataDt0LoadResult := core.ToMapAny(storeRef01DataDt0Loaded)
		if storeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if storeRef01DataDt0LoadResult["id"] != storeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func storeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "store", "StoreTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read store test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse store test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"store01", "store02", "store03", "viewfinder01", "viewfinder02", "viewfinder03", "container01", "container02", "container03", "tumbler01", "tumbler02", "tumbler03", "age01", "country01", "language01", "search_string01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("PLAYSTATIONSTORE_TEST_STORE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PLAYSTATIONSTORE_TEST_STORE_ENTID": idmap,
		"PLAYSTATIONSTORE_TEST_LIVE":      "FALSE",
		"PLAYSTATIONSTORE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["PLAYSTATIONSTORE_TEST_STORE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["PLAYSTATIONSTORE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewPlaystationStoreSDK(core.ToMapAny(mergedOpts))
	}

	live := env["PLAYSTATIONSTORE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["PLAYSTATIONSTORE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
