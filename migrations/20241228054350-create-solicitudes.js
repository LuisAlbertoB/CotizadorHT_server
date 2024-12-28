'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitudes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      web_page: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      financial_score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      anotations: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_perfil_inversion: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'PerfilInversiones',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Solicitudes');
  },
};
