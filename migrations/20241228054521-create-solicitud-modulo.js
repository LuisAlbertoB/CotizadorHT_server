'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SolicitudModulos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_solicitud: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Solicitudes', // Referencia a la tabla Solicitudes
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_modulo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Modulos', // Referencia a la tabla Modulos
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_funcionalidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionalidades', // Referencia a la tabla Funcionalidades
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('SolicitudModulos');
  },
};
