'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolicitudRespuesta extends Model {
    static associate(models) {
      SolicitudRespuesta.belongsTo(models.Solicitud, {
        foreignKey: 'id_solicitud',
        as: 'solicitud',
      });

      SolicitudRespuesta.belongsTo(models.Pregunta, {
        foreignKey: 'id_pregunta',
        as: 'pregunta',
      });

      SolicitudRespuesta.belongsTo(models.Respuesta, {
        foreignKey: 'id_respuesta',
        as: 'respuesta',
      });
    }
  }

  SolicitudRespuesta.init(
    {
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_respuesta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SolicitudRespuesta',
      tableName: 'SolicitudRespuestas',
      timestamps: true,
    }
  );

  return SolicitudRespuesta;
};
