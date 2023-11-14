'use strict'

const Comuna = use('App/Models/Comuna')

class ComunaController {
 
  async index ({ request, response }) {
    const input = request.all();
    if(input.txtBuscar !== undefined){
      return await Comuna.query()
                          .where('identificador', input.txtBuscar)
                          .fetch()
    }
    return await Comuna.all()
  }

  async show ({ params, request, response }) {
  }

 
}

module.exports = ComunaController
