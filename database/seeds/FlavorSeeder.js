'use strict'

/*
|--------------------------------------------------------------------------
| FlavorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class FlavorSeeder {
  static async run () {
    await Database.table('flavors').insert([
      {
        'flavor': 'Chocolate'
      },
      {
        'flavor': 'Vainilla'
      },
      {
        'flavor': 'Frutilla'
      },
      {
        'flavor': 'Peanut butter'
      }
    ])
  }
}

module.exports = FlavorSeeder
