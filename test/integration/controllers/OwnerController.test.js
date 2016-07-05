'use strict'
/* global describe, it */

const assert = require('assert')

describe('OwnerController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['OwnerController'])
  })
})
