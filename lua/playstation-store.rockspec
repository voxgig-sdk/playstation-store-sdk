package = "voxgig-sdk-playstation-store"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/playstation-store-sdk.git"
}
description = {
  summary = "PlaystationStore SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["playstation-store_sdk"] = "playstation-store_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
