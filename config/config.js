require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    migrationStorageTableName: 'sequelize_meta', // Nombre de la tabla que guardará el estado de las migraciones
    migrations: {
      path: path.resolve(__dirname, '../migrations'),  // Cambiado para apuntar a la raíz del proyecto
    },
    seederStorage: 'json',
    seederStorageTableName: 'sequelize_data',  // Si usas seeders
    models: path.resolve(__dirname, '../src/models'),  // Cambiado para apuntar a la carpeta src/models
  },
};
