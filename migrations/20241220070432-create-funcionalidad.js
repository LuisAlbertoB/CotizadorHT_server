'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funcionalidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER, // Número de horas o días estimado para el desarrollo
        allowNull: true,
      },
      developmentRate: {
        type: Sequelize.INTEGER, // Tarifa de desarrollo, puede ser en valor monetario o por hora
        allowNull: true,
      },
      idModulo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modulos',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE', // Si se elimina un modulo, las funcionalidades asociadas se eliminarán también
        onUpdate: 'CASCADE', // Si se actualiza el modulo, se reflejará en la funcionalidad
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Funcionalidades');
  }
};
