'use strict'

const Productos = use('App/Models/Region')

class RegionController {
  
  async index () {
    return await Productos.all()
  }

  async show ({ params }) {
    return await Productos.findOrFail(params.id)
  }

}

module.exports = RegionController
