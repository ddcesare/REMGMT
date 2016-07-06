'use strict'

const Model = require('trails-model')

/**
 * @module Property
 * @description Property Model
 */
module.exports = class Property extends Model {

  static config () {
  }

  static schema () {
    return {
      info: {
        type: 'text'
      },
      status: {
        type: 'string',
        enum: ['rented', 'sold', 'available', 'reserved'],
        defaultsTo: 'available'
      }/*,
      pictures: {
        collection: 'Picture',
        via: 'property'
      },*/
      /*contacts: {
        collection: 'Contract',
        via: 'property'
      }*/
    }
  }
}
