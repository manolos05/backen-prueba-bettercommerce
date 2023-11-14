'use strict'

const Flavor = use('App/Models/Flavor')
const { validateAll } = use('Validator')

class FlavorController {

  async index ({ request, response }) {
    return await Flavor.all()
  }

  async store ({ request, response }) {
    const input = request.all();

    // validation

    const validation = await this.validar(input);

    if(validation.fails()){
      return validation.messages();
    }

    await Flavor.create(input);

    return response.json({
      rer: true,
      message: 'Registro creado'
    })

  }
  async show ({ params }) {
    return await Flavor.findOrFail(params.id);
  }

  async update ({ params, request, response }) {
    const input = request.all();

    // validation

    const validation = await this.validar(input, params.id)

    if(validation.fails()){
      return validation.messages();
    }

    await Flavor.query().where('id', params.id).update(input);

    return response.json({
      rer: true,
      message: 'Registro actualizado'
    })
  }

  async destroy ({ params, response }) {
    const flavorDelete = await Flavor.findOrFail(params.id);
    await flavorDelete.delete();
    return response.json({
      rer: true,
      message: 'Eliminado correctamente'
    })
  }

  async validar(input, id = null)
  {
    let ruleUpdate = id === null ? '' : ',id,' + id;
    return await validateAll(input, {
      'flavor' : 'required|min:3|max:20'
    })
  }
}

module.exports = FlavorController
