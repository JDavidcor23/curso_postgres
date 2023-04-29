const { User, UserSchema } = require('./user.model');
// const { Customer, CustomerSchema } = require('./customer.model');

// esta funcion nos permite configurar los modelos
function setupModels(sequelize) {
  // sequelize es la instancia de la base de datos
  //User.init es un metodo estatico que nos permite inicializar el modelo
  //User.config es un metodo estatico que nos permite configurar el modelo
  User.init(UserSchema, User.config(sequelize));
  // Customer.init(CustomerSchema, Customer.config(sequelize));
}

module.exports = setupModels;
