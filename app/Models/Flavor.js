'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Flavor extends Model {
    static get table(){
        return 'flavors'
    }
    static get hidden(){
        return ['created_at', 'updated_at']
    }
}

module.exports = Flavor
