'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolicitudModulo extends Model {
    static associate(models) {
      SolicitudModulo.belongsTo(models.Solicitud, {
        foreignKey: 'id_solicitud',
        as: 'solicitud',
      });
      SolicitudModulo.belongsTo(models.Modulo, {
        foreignKey: 'id_modulo',
        as: 'modulo',
      });
      SolicitudModulo.belongsTo(models.Funcionalidad, {
        foreignKey: 'id_funcionalidad',
        as: 'funcionalidad',
      });
    }
  }

  SolicitudModulo.init(
    {
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Solicitudes', // Referencia a la tabla Solicitudes
          key: 'id',
        },
      },
      id_modulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Modulos', // Referencia a la tabla Modulos
          key: 'id',
        },
      },
      id_funcionalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionalidades', // Referencia a la tabla Funcionalidades
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'SolicitudModulo',
      tableName: 'SolicitudModulos', // Nombre de la tabla pivote
      timestamps: true, // Utiliza los campos createdAt y updatedAt
    }
  );

  return SolicitudModulo;
};
