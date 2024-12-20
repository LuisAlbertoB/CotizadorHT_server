'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SolicitudRespuestas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_solicitud: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Solicitudes', // Nombre de la tabla referenciada
          key: 'id'             // Columna que se referencia
        },
        onDelete: 'CASCADE',  // Acción cuando se elimina un registro de Solicitudes
        onUpdate: 'CASCADE'   // Acción cuando se actualiza el registro de Solicitudes
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
      id_respuesta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Respuestas', // Nombre de la tabla referenciada
          key: 'id'            // Columna que se referencia
        },
        onDelete: 'CASCADE',  // Acción cuando se elimina un registro de Respuestas
        onUpdate: 'CASCADE'   // Acción cuando se actualiza el registro de Respuestas
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
    await queryInterface.dropTable('SolicitudRespuestas');
  }
};
