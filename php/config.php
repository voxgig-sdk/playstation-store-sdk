<?php
declare(strict_types=1);

// PlaystationStore SDK configuration

class PlaystationStoreConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "PlaystationStore",
                "slug" => "playstation-store",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://store.playstation.com/",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "geo" => [],
                    "image" => [],
                    "store" => [],
                ],
            ],
            "entity" => [
        'geo' => [
          'fields' => [],
          'name' => 'geo',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/kamaji/api/chihiro/00_09_000/geo',
                  'parts' => [
                    'kamaji',
                    'api',
                    'chihiro',
                    '00_09_000',
                    'geo',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'image' => [
          'fields' => [],
          'name' => 'image',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 999,
                        'kind' => 'param',
                        'name' => 'age',
                        'orig' => 'age',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'container_id',
                        'orig' => 'country',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'cusa',
                        'orig' => 'cusa',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'bg_color',
                        'orig' => 'bg_color',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'h',
                        'orig' => 'h',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'opacity',
                        'orig' => 'opacity',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'w',
                        'orig' => 'w',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}/image',
                  'parts' => [
                    'store',
                    'api',
                    'chihiro',
                    '00_09_000',
                    'container',
                    '{container_id}',
                    '{language}',
                    '{age}',
                    '{cusa}',
                    'image',
                  ],
                  'rename' => [
                    'param' => [
                      'country' => 'container_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'age',
                      'bg_color',
                      'container_id',
                      'cusa',
                      'h',
                      'language',
                      'opacity',
                      'platform',
                      'w',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'container',
              ],
            ],
          ],
        ],
        'store' => [
          'fields' => [
            [
              'name' => 'age_limit',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'attributes',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'container_type',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content_origin',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'dob_required',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'links',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'long_desc',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'metadata',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'promomedia',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'restricted',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'revision',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'scene_layout',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'size',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'sku_links',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'sort',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'start',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'template_def',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'timestamp',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'total_results',
              'req' => true,
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'store',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 999,
                        'kind' => 'param',
                        'name' => 'age',
                        'orig' => 'age',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'cusa',
                        'orig' => 'cusa',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_content_type',
                        'orig' => 'game_content_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_demo',
                        'orig' => 'game_demo',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_type',
                        'orig' => 'game_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genre',
                        'orig' => 'genre',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'price',
                        'orig' => 'price',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'relationship',
                        'orig' => 'relationship',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'release_date',
                        'orig' => 'release_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'subtitle_lang',
                        'orig' => 'subtitle_lang',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'top_category',
                        'orig' => 'top_category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'voice_lang',
                        'orig' => 'voice_lang',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/store/api/chihiro/00_09_000/container/{country}/{language}/{age}/{cusa}',
                  'parts' => [
                    'store',
                    'api',
                    'chihiro',
                    '00_09_000',
                    'container',
                    '{country}',
                    '{language}',
                    '{age}',
                    '{cusa}',
                  ],
                  'select' => [
                    'exist' => [
                      'age',
                      'country',
                      'cusa',
                      'direction',
                      'game_content_type',
                      'game_demo',
                      'game_type',
                      'genre',
                      'language',
                      'platform',
                      'price',
                      'relationship',
                      'release_date',
                      'size',
                      'sort',
                      'start',
                      'subtitle_lang',
                      'top_category',
                      'voice_lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 999,
                        'kind' => 'param',
                        'name' => 'age',
                        'orig' => 'age',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'search_string',
                        'orig' => 'search_string',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_content_type',
                        'orig' => 'game_content_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_demo',
                        'orig' => 'game_demo',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'game_type',
                        'orig' => 'game_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genre',
                        'orig' => 'genre',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'price',
                        'orig' => 'price',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'relationship',
                        'orig' => 'relationship',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'release_date',
                        'orig' => 'release_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'subtitle_lang',
                        'orig' => 'subtitle_lang',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'top_category',
                        'orig' => 'top_category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'voice_lang',
                        'orig' => 'voice_lang',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/store/api/chihiro/00_09_000/tumbler/{country}/{language}/{age}/{searchString}',
                  'parts' => [
                    'store',
                    'api',
                    'chihiro',
                    '00_09_000',
                    'tumbler',
                    '{country}',
                    '{language}',
                    '{age}',
                    '{search_string}',
                  ],
                  'rename' => [
                    'param' => [
                      'searchString' => 'search_string',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'age',
                      'country',
                      'direction',
                      'game_content_type',
                      'game_demo',
                      'game_type',
                      'genre',
                      'language',
                      'platform',
                      'price',
                      'relationship',
                      'release_date',
                      'search_string',
                      'size',
                      'sort',
                      'start',
                      'subtitle_lang',
                      'top_category',
                      'voice_lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 999,
                        'kind' => 'param',
                        'name' => 'age',
                        'orig' => 'age',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'cusa',
                        'orig' => 'cusa',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'language',
                        'orig' => 'language',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/chihiro-api/viewfinder/{country}/{language}/{age}/{cusa}',
                  'parts' => [
                    'chihiro-api',
                    'viewfinder',
                    '{country}',
                    '{language}',
                    '{age}',
                    '{cusa}',
                  ],
                  'select' => [
                    'exist' => [
                      'age',
                      'country',
                      'cusa',
                      'direction',
                      'language',
                      'size',
                      'sort',
                      'start',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'viewfinder',
              ],
              [
                'container',
              ],
              [
                'tumbler',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PlaystationStoreFeatures::make_feature($name);
    }
}
