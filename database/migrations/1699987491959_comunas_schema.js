'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComunasSchema extends Schema {
  up () {
    this.create('comunas', (table) => {
      table.increments()
      table.string('region')
      table.string('identificador')
      table.string('provincia')
      table.string('comuna')
      table.timestamps()
    })
  }

  down () {
    this.drop('comunas')
  }
}

module.exports = ComunasSchema
