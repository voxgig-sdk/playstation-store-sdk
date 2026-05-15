
import { Context } from './Context'


class PlaystationStoreError extends Error {

  isPlaystationStoreError = true

  sdk = 'PlaystationStore'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PlaystationStoreError
}

