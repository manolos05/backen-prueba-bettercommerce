'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FlavorsSchema extends Schema {
  up () {
    this.create('flavors', (table) => {
      table.increments()
      table.string('flavor')
      table.timestamps()
    })
  }

  down () {
    this.drop('flavors')
  }
}

module.exports = FlavorsSchema
