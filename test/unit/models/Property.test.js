'use strict'
/* global describe, it */

const assert = require('assert')

describe('Property Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Property'])
  })
})
