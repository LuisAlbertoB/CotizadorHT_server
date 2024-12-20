'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación con la tabla Pregunta
      Respuesta.belongsTo(models.Pregunta, {
        foreignKey: 'id_pregunta',
        as: 'pregunta', // Alias de la relación
      });
    }
  }

  Respuesta.init(
    {
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Respuesta',
      tableName: 'Respuestas', // Nombre de la tabla en la base de datos
      timestamps: true, // Esto incluye created_at y updated_at
      underscored: true, // Convierte camelCase a snake_case en los nombres de las columnas
    }
  );

  return Respuesta;
};
