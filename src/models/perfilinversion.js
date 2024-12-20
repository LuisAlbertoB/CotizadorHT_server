'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PerfilInversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here, if necessary
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
    },
    {
      sequelize,
      modelName: 'PerfilInversion',
      tableName: 'PerfilInversiones', // Optional: to set a specific table name
      timestamps: true, // This ensures created_at and updated_at are included
      underscored: true, // Converts camelCase to snake_case for column 
    }
  );

  return PerfilInversion;
};
