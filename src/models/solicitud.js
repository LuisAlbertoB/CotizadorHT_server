'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitud extends Model {
    static associate(models) {
      // Relación con PerfilInversion
      Solicitud.belongsTo(models.PerfilInversion, {
        foreignKey: 'id_perfil_inversion',
        as: 'perfilInversion',
      });
    }
  }

  Solicitud.init(
    {
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      web_page: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      financial_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_perfil_inversion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Solicitud',
      tableName: 'Solicitudes',
      timestamps: true,
      underscored: true,
    }
  );

  return Solicitud;
};
