'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcionalidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación con el modelo 'Modulo'
      Funcionalidad.belongsTo(models.Modulo, {
        foreignKey: 'idModulo', // Clave foránea en 'Funcionalidades'
        as: 'modulo', // Nombre del alias para la relación
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
      tableName: 'Funcionalidades', // Nombre de la tabla en la base de datos
      timestamps: true, // Esto incluye created_at y updated_at
      underscored: true, // Convierte camelCase a snake_case en los nombres de las columnas
    }
  );

  return Funcionalidad;
};
