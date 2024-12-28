'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funcionalidades', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      developmentTime: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      developmentRate: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      idModulo: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Modulos',
          key: 'id',
        },
        onUpdate: 'CASCADE',  // Si se actualiza un Modulo, también se actualiza en Funcionalidades
        onDelete: 'SET NULL', // Si se elimina un Modulo, se pone en NULL el idModulo
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Establecer valor por defecto
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Establecer valor por defecto
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Funcionalidades');
  },
};
