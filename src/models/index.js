'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

// Obtener la configuración según el entorno
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Usar path.resolve para asegurarse de que se apunte correctamente al archivo config.js
const config = require(path.resolve(__dirname, '../../config/config.js'))[env];  // Cambio de ruta aquí
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Leer los archivos de los modelos en la carpeta actual
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    // Importar cada modelo y agregarlo a db
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Definir las asociaciones si existen
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
