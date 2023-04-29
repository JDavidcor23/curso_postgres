const boom = require('@hapi/boom');

// los modelos es lo que te entrega sequelize
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    //creamos un usuario === POST
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    //porque user, porque lo definimos asi en db\models\index.js en el metodo estatico config
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    // findByPk es un metodo de sequelize que nos ayuda a buscar por id en la base de datos
    const user = await this.findOne(id);
    const result = await user.update(changes);
    return result;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
