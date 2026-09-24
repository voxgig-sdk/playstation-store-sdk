
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PlaystationStoreSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PlaystationStoreSDK.test()
    equal(testsdk instanceof PlaystationStoreSDK, true,
      'PlaystationStoreSDK.test() must return a client synchronously')
  })

})
