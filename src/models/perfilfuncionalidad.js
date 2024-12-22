'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PerfilFuncionalidad extends Model {
    static associate(models) {
      PerfilFuncionalidad.belongsTo(models.Funcionalidad, {
        foreignKey: 'id_funcionalidad',
        as: 'funcionalidad',
      });

      PerfilFuncionalidad.belongsTo(models.PerfilInversion, {
        foreignKey: 'id_perfil',
        as: 'perfil',
      });
    }
  }

  PerfilFuncionalidad.init(
    {
      id_funcionalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionalidades',
          key: 'id',
        },
      },
      id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PerfilInversiones',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'PerfilFuncionalidad',
      tableName: 'PerfilFuncionalidades',
      timestamps: true,
    }
  );

  return PerfilFuncionalidad;
};
