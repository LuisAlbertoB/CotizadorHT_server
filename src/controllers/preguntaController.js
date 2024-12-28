const { Pregunta } = require('../models');

const getPreguntas = async (req, res) => {
  try {
    const preguntas = await Pregunta.findAll();
    return res.status(200).json(preguntas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las preguntas.' });
  }
};

const clearPreguntas = async (req, res) => {
    try {
      await Pregunta.destroy({ where: {} });
      return res.status(200).json({ message: 'All preguntas deleted' });
    } catch (error) {
      console.error('Error clearing modulos:', error);
      return res.status(500).json({ error: 'Error clearing modulos' });
    }
  };

  module.exports = {
    getPreguntas,
    clearPreguntas
  };
