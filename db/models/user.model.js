const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    // primaryKey sirve para indicar que es la llave primaria
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  // agregar un nuevo ca,po a la tabla de usuarios
  role: { allowNull: false, type: DataTypes.STRING, defaultValue: 'customer' },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    // en las bases de datos no se usa camelCase, se usa snake_case
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

// el modelo es la representacion de la tabla en la base de datos y nos permite hacer consultas
class User extends Model {
  static associate() {
    // associate
  }
  // config es un metodo estatico que nos permite configurar el modelo
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      // timestamps sirve para indicarle a sequelize que no cree los campos createdAt y updatedAt
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
