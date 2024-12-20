'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Aquí puedes definir asociaciones si es necesario
    }
  }

  Modulo.init(
    {
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Modulo',
      tableName: 'Modulos', // Nombre de la tabla en la base de datos
      timestamps: true, // Esto incluye created_at y updated_at
      underscored: true, // Convierte camelCase a snake_case en los nombres de las columnas
    }
  );

  return Modulo;
};
