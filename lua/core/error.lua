-- PlaystationStore SDK error

local PlaystationStoreError = {}
PlaystationStoreError.__index = PlaystationStoreError


function PlaystationStoreError.new(code, msg, ctx)
  local self = setmetatable({}, PlaystationStoreError)
  self.is_sdk_error = true
  self.sdk = "PlaystationStore"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PlaystationStoreError:error()
  return self.msg
end


function PlaystationStoreError:__tostring()
  return self.msg
end


return PlaystationStoreError
