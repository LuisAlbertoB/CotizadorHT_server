'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolicitudRespuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación con Solicitud
      SolicitudRespuesta.belongsTo(models.Solicitud, {
        foreignKey: 'id_solicitud',
        as: 'solicitud', // Alias de la relación
      });

      // Relación con Pregunta
      SolicitudRespuesta.belongsTo(models.Pregunta, {
        foreignKey: 'id_pregunta',
        as: 'pregunta', // Alias de la relación
      });

      // Relación con Respuesta
      SolicitudRespuesta.belongsTo(models.Respuesta, {
        foreignKey: 'id_respuesta',
        as: 'respuesta', // Alias de la relación
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
      tableName: 'SolicitudRespuestas', // Nombre de la tabla en la base de datos
      timestamps: true, // Esto incluye created_at y updated_at
      underscored: true, // Convierte camelCase a snake_case en los nombres de las columnas
    }
  );

  return SolicitudRespuesta;
};
