'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegionSchema extends Schema {
  up () {
    this.create('regions', (table) => {
      table.increments()
      table.string('region')
      table.string('identificador')
      table.timestamps()
    })
  }

  down () {
    this.drop('regions')
  }
}

module.exports = RegionSchema
