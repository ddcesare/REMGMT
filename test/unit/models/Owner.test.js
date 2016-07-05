'use strict'
/* global describe, it */

const assert = require('assert')

describe('Owner Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Owner'])
  })
})
