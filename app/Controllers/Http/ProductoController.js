'use strict'

const Productos = use('App/Models/Producto')
const { validateAll } = use('Validator')

class ProductoController {

  async index ({ request, response }) {
    return await Productos.all()
  }

//POST
 
  async store ({ request, response }) {
    const input = request.all();

    // validation

    const validation = await this.validar(input)

    if(validation.fails()){
      return validation.messages();
    }

    await Productos.create(input)

    return response.json({
      rer: true,
      message: 'Registro creado'
    })
  }

 
  async show ({ params }) {
    return await Productos.findOrFail(params.id);
  }


// PUT

  async update ({ params, request, response }) {
    const input = request.all();

    // validation

    const validation = await this.validar(input, params.id);

    if(validation.fails()){
      return validation.messages();
    }

    await Productos.query().where('id', params.id).update(input);

    return response.json({
      rer: true,
      message: 'Registro actualizado'
    })
  }

//DELETE

  async destroy ({ params, response }) {
    const productoDelete = await Productos.findOrFail(params.id);
    await productoDelete.delete();
    return response.json({
      rer: true,
      message: 'Eliminado correctamente'
    })
  }

  async validar(input, id = null)
  {
    let ruleUpdate = id === null ? '' : ',id,' + id;
    return await validateAll(input, {
      'product_name' : 'required|min:3|max:100',
      'brand' : 'required|min:3|max:100',
      'url_img' : 'required|min:3|max:350',
      'price' : 'required|min:1|max:50',
      'discount' : 'required|min:1|max:50',
      
    })
  }
}

module.exports = ProductoController
