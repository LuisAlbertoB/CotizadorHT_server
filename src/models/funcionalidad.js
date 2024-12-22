'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcionalidad extends Model {
    static associate(models) {
      Funcionalidad.belongsTo(models.Modulo, {
        foreignKey: 'idModulo',
        as: 'modulo',
      });
    }
  }

  Funcionalidad.init(
    {
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      developmentTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      developmentRate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      idModulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Modulos',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Funcionalidad',
      tableName: 'Funcionalidades',
      timestamps: true,
    }
  );

  return Funcionalidad;
};
