import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "geo",
    "accessor": "Geo",
    "op": "load",
    "method": "GET",
    "path": "/kamaji/api/chihiro/00_09_000/geo",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "image",
    "accessor": "Image",
    "op": "load",
    "method": "GET",
    "path": "/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image",
    "args": [
      {
        "name": "age",
        "wire": "age",
        "value": "p1"
      },
      {
        "name": "container_id",
        "wire": "country",
        "value": "p2"
      },
      {
        "name": "cusa",
        "wire": "cusa",
        "value": "p3"
      },
      {
        "name": "language",
        "wire": "language",
        "value": "p4"
      }
    ],
    "select": {
      "bg_color": "v1",
      "h": "v1",
      "opacity": 100,
      "platform": "v1",
      "w": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "image/jpeg;charset=UTF-8"
    ],
    "query": [
      "w",
      "h",
      "bg_color",
      "opacity",
      "platform"
    ],
    "queryArgs": [
      {
        "name": "bg_color",
        "wire": "bg_color"
      },
      {
        "name": "h",
        "wire": "h"
      },
      {
        "name": "opacity",
        "wire": "opacity"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "w",
        "wire": "w"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "store",
    "accessor": "Store",
    "op": "load",
    "method": "GET",
    "path": "/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}",
    "args": [
      {
        "name": "age",
        "wire": "age",
        "value": "p1"
      },
      {
        "name": "country",
        "wire": "country",
        "value": "p2"
      },
      {
        "name": "language",
        "wire": "language",
        "value": "p3"
      },
      {
        "name": "search_string",
        "wire": "searchString",
        "value": "p4"
      }
    ],
    "select": {
      "direction": "v1",
      "game_content_type": "v1",
      "game_demo": "v1",
      "game_type": "v1",
      "genre": "v1",
      "platform": "v1",
      "price": "v1",
      "relationship": "v1",
      "release_date": "v1",
      "size": 1,
      "sort": "v1",
      "start": 0,
      "subtitle_lang": "v1",
      "top_category": "v1",
      "voice_lang": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "size",
      "start",
      "sort",
      "direction",
      "gameContentType",
      "subtitleLang",
      "releaseDate",
      "gameDemo",
      "price",
      "genre",
      "topCategory",
      "voiceLang",
      "game_type",
      "relationship",
      "platform"
    ],
    "queryArgs": [
      {
        "name": "direction",
        "wire": "direction"
      },
      {
        "name": "game_content_type",
        "wire": "gameContentType"
      },
      {
        "name": "game_demo",
        "wire": "gameDemo"
      },
      {
        "name": "game_type",
        "wire": "game_type"
      },
      {
        "name": "genre",
        "wire": "genre"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "price",
        "wire": "price"
      },
      {
        "name": "relationship",
        "wire": "relationship"
      },
      {
        "name": "release_date",
        "wire": "releaseDate"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "start",
        "wire": "start"
      },
      {
        "name": "subtitle_lang",
        "wire": "subtitleLang"
      },
      {
        "name": "top_category",
        "wire": "topCategory"
      },
      {
        "name": "voice_lang",
        "wire": "voiceLang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "age_limit": 1,
      "attributes": {
        "facets": {
          "game_content_type": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "subtitle_lang": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "release_date": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "game_demo": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "price": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "genre": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "top_category": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "voice_lang": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "game_type": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "relationship": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ],
          "platform": [
            {
              "name": "x",
              "count": 1,
              "key": "x"
            }
          ]
        },
        "next": []
      },
      "container_type": "x",
      "content_origin": 1,
      "dob_required": true,
      "id": "x",
      "images": [],
      "links": [
        {
          "bucket": "x",
          "container_type": "x",
          "content_type": "x",
          "default_sku": {
            "amortizeFlag": true,
            "bundleExclusiveFlag": true,
            "chargeImmediatelyFlag": true,
            "charge_type_id": 1,
            "credit_card_required_flag": 1,
            "defaultSku": true,
            "display_price": "x",
            "eligibilities": [
              {
                "id": "x",
                "operand": "x",
                "operator": "x",
                "name": "x",
                "drms": []
              }
            ],
            "entitlements": [
              {
                "drms": [],
                "duration": 1,
                "exp_after_first_use": 1,
                "feature_type_id": 1,
                "id": "x",
                "license_type": 1,
                "metadata": {},
                "name": "x",
                "packageType": "x",
                "packages": [],
                "preorder_placeholder_flag": true,
                "size": 1,
                "subType": 1,
                "subtitle_language_codes": [],
                "type": 1,
                "use_count": 1,
                "voice_language_codes": []
              }
            ],
            "id": "x",
            "is_original": true,
            "name": "x",
            "platforms": [
              1
            ],
            "price": 1,
            "rewards": [
              {
                "id": "x",
                "entitlement_id": "x",
                "discount": 1,
                "price": 1,
                "reward_type": 1,
                "display_price": "x",
                "isPlus": true,
                "isEAAccess": true,
                "campaigns": [],
                "reward_source_type_id": 1,
                "start_date": "x",
                "service_provider_id": "x",
                "name": "x",
                "description": "x",
                "rewardSourceId": 1,
                "end_date": "x",
                "bonus_discount": 1,
                "bonus_entitlement_id": "x",
                "bonus_price": 1,
                "bonus_display_price": "x"
              }
            ],
            "seasonPassExclusiveFlag": true,
            "skuAvailabilityOverrideFlag": true,
            "sku_type": 1,
            "type": "x",
            "end_date": "x",
            "augmented_description": "x",
            "playability_date": "x",
            "wallet_charge_date": "x"
          },
          "gameContentTypesList": [
            {
              "name": "x",
              "key": "x"
            }
          ],
          "game_contentType": "x",
          "id": "x",
          "images": [
            {
              "type": 1,
              "url": "x"
            }
          ],
          "name": "x",
          "playable_platform": [
            "x"
          ],
          "release_date": "x",
          "restricted": true,
          "revision": 1,
          "short_name": "x",
          "timestamp": 1,
          "top_category": "x",
          "url": "x",
          "provider_name": "x",
          "parent_name": "x",
          "cloud_only_platform": [
            "x"
          ],
          "bundleChildTypeId": 1
        }
      ],
      "long_desc": "x",
      "metadata": {},
      "name": "x",
      "promomedia": [],
      "restricted": true,
      "revision": 1,
      "scene_layout": {
        "id": 1,
        "catalogEntryId": "x",
        "storeFrontId": 1,
        "templateId": 1,
        "subScenes": [],
        "storeTypeId": 1
      },
      "size": 1,
      "sku_links": [],
      "sort": "x",
      "start": 1,
      "template_def": {
        "name": "x",
        "id": 1,
        "storeTypeId": 1,
        "locations": [
          {
            "id": 1,
            "width": "x",
            "height": "x",
            "offsetX": "x",
            "offsetY": "x",
            "widgets": [
              {
                "id": 1,
                "order": "x",
                "locationWidgetId": 1
              }
            ]
          }
        ],
        "extras": [
          {
            "templateExtraId": 1,
            "width": 1,
            "height": 1,
            "key": "x"
          }
        ]
      },
      "timestamp": 1,
      "total_results": 1
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
