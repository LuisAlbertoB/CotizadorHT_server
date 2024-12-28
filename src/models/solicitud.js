'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitud extends Model {
    static associate(models) {
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
      anotations: { // Nuevo campo
        type: DataTypes.STRING,
        allowNull: true,
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
    }
  );

  return Solicitud;
};
