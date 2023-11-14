'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('product_name', 100)
      table.string('brand', 50)
      table.string('url_img', 350)
      table.integer('price', 50)
      table.integer('discount', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
