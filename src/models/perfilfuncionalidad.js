'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PerfilFuncionalidad extends Model {
    static associate(models) {
      // Relación con el modelo 'Funcionalidad'
      PerfilFuncionalidad.belongsTo(models.Funcionalidad, {
        foreignKey: 'id_funcionalidad', // Clave foránea en 'PerfilFuncionalidades'
        as: 'funcionalidad', // Alias de la relación
      });

      // Relación con el modelo 'PerfilInversion'
      PerfilFuncionalidad.belongsTo(models.PerfilInversion, {
        foreignKey: 'id_perfil', // Clave foránea en 'PerfilFuncionalidades'
        as: 'perfil', // Alias de la relación
      });
    }
  }

  PerfilFuncionalidad.init(
    {
      id_funcionalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionalidades', // Nombre de la tabla referenciada
          key: 'id', // Columna clave primaria
        },
      },
      id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PerfilInversiones', // Nombre de la tabla referenciada
          key: 'id', // Columna clave primaria
        },
      },
    },
    {
      sequelize,
      modelName: 'PerfilFuncionalidad',
      tableName: 'PerfilFuncionalidades',
      timestamps: true,
      underscored: true,
    }
  );

  return PerfilFuncionalidad;
};
