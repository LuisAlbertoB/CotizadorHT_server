'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PerfilInversion extends Model {
    static associate(models) {
      // Define asociaciones si las hay
    }
  }

  PerfilInversion.init(
    {
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      min_score_threshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_score_threshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tarifa_usd: {
        type: DataTypes.FLOAT,
        allowNull: true, // Cambia a `false` si es requerido
      },
      variation_rate: {
        type: DataTypes.FLOAT,
        allowNull: true, // Cambia a `false` si es requerido
      },
    },
    {
      sequelize,
      modelName: 'PerfilInversion',
      tableName: 'PerfilInversiones',
      timestamps: true,
    }
  );

  return PerfilInversion;
};
