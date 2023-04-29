'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // crea la tabla de usuarios con el esquema definido en el modelo
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    // elimina la tabla de usuarios
    await queryInterface.drop(USER_TABLE);
  },
};
