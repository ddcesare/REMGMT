'use strict'

const Client = require('./Client')

/**
 * @module Owner
 * @description Owner client model
 */
module.exports = class Owner extends Client {

  static config () {
    return {
      tableName: 'client',
      beforeValidate: function(attrs, next) {
        attrs.type = 'owner';
        next();
      }
    }
  }

  static schema () {
    return Object.assign({}, super.schema(), {
      /*properties: {
        collection: 'Property',
        via: 'owner'
      }*/
    })
  }
}
