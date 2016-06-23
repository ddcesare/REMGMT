'use strict'

const Model = require('trails-model')

/**
 * @module Client
 * @description Client model
 */
module.exports = class Client extends Model {

  static config () {
  }

  static schema () {
    return {
      name: {
        type: 'string',
        required: true
      },
      surname: {
        type: 'string',
        required: true,
        index: true
      },
      birthdate: {
        type: 'date'
      },
      email: {
        type: 'email',
        required: true
      },
      role: {
        type: 'string',
        enum: ['owner', 'tenant', 'buyer'],
        defaultsTo: 'owner'
      },
      info: {
        type: 'text'
      }
    }
  }
}
