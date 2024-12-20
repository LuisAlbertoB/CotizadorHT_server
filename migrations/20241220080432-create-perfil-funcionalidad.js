'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PerfilFuncionalidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_funcionalidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Funcionalidades', // Nombre de la tabla referenciada
          key: 'id', // Columna clave primaria
        },
        onDelete: 'CASCADE', // Eliminar registros de PerfilFuncionalidad si se elimina la Funcionalidad
        onUpdate: 'CASCADE', // Si se actualiza la Funcionalidad, se reflejará en PerfilFuncionalidad
      },
      id_perfil: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PerfilInversiones', // Nombre de la tabla referenciada
          key: 'id', // Columna clave primaria
        },
        onDelete: 'CASCADE', // Eliminar registros de PerfilFuncionalidad si se elimina el Perfil
        onUpdate: 'CASCADE', // Si se actualiza el Perfil, se reflejará en PerfilFuncionalidad
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
    await queryInterface.dropTable('PerfilFuncionalidades');
  }
};
