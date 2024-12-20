'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Aquí se definen las asociaciones, si es necesario
    }
  }

  Pregunta.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Pregunta',
      tableName: 'Preguntas', // Nombre de la tabla en la base de datos
      timestamps: true, // Esto incluye created_at y updated_at
      underscored: true, // Convierte camelCase a snake_case en los nombres de las columnas
    }
  );

  return Pregunta;
};
