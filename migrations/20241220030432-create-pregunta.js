'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Renombrar la tabla 'preguntas' a 'Preguntas'
    await queryInterface.renameTable('preguntas', 'Preguntas');

    // Si es necesario, actualiza las relaciones de claves foráneas
    // En caso de que haya claves foráneas que apunten a 'preguntas', debes actualizarlas aquí
    // Ejemplo:
    await queryInterface.removeConstraint('Respuestas', 'nombre_de_la_clave_foranea'); // Reemplaza con el nombre real de la clave foránea
    await queryInterface.addConstraint('Respuestas', {
      fields: ['id_pregunta'],
      type: 'foreign key',
      name: 'fk_respuestas_preguntas', // Nombre de la clave foránea
      references: {
        table: 'Preguntas', // Nombre de la tabla actualizada
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Restaurar el nombre de la tabla a 'preguntas'
    await queryInterface.renameTable('Preguntas', 'preguntas');

    // Eliminar la nueva clave foránea
    await queryInterface.removeConstraint('Respuestas', 'fk_respuestas_preguntas');

    // Si es necesario restaurar relaciones previas, hazlo aquí
    await queryInterface.addConstraint('Respuestas', {
      fields: ['id_pregunta'],
      type: 'foreign key',
      name: 'nombre_de_la_clave_foranea', // Nombre de la clave foránea anterior
      references: {
        table: 'preguntas',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },
};
