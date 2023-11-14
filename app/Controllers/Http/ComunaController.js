'use strict'

const Comuna = use('App/Models/Comuna')

class ComunaController {
 
  async index ({ request }) {
    const input = request.all();
    if(input.txtBuscar !== undefined){
      return await Comuna.query()
                          .where('identificador', input.txtBuscar)
                          .fetch()
    }
    return await Comuna.all()
  }

  async show ({ params }) {
    return await Comuna.findOrFail(params.id)
  }

 
}

module.exports = ComunaController
