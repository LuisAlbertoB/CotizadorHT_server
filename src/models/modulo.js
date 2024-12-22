'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modulo extends Model {
    static associate(models) {
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
      tableName: 'Modulos', 
      timestamps: true, 
      createdAt: 'createdAt', 
      updatedAt: 'updatedAt', 
    }
  );

  return Modulo;
};
