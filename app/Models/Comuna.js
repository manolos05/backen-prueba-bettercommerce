'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comuna extends Model {
    static get table(){
        return 'comunas'
    }
    static get hidden(){
        return ['created_at', 'updated_at']
    }
}

module.exports = Comuna
