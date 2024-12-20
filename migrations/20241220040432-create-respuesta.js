'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pregunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Preguntas', // Nombre de la tabla referenciada
          key: 'id'           // Columna que se referencia
        },
        onDelete: 'CASCADE',  // Acción cuando se elimina un registro de Preguntas
        onUpdate: 'CASCADE'   // Acción cuando se actualiza el registro de Preguntas
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('Respuestas');
  }
};
