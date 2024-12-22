'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    static associate(models) {
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
      tableName: 'Preguntas', 
      timestamps: true,
    }
  );

  return Pregunta;
};
