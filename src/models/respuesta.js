'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    static associate(models) {
      Respuesta.belongsTo(models.Pregunta, {
        foreignKey: 'id_pregunta',
        as: 'pregunta',
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
      tableName: 'Respuestas',
      timestamps: true,
    }
  );

  return Respuesta;
};
