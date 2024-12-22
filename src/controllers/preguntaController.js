const { Pregunta } = require('../models');

const createPregunta = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'El campo "question" es obligatorio.' });
    }

    const nuevaPregunta = await Pregunta.create({ question });
    return res.status(201).json(nuevaPregunta);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la pregunta.' });
  }
};

const getPreguntas = async (req, res) => {
  try {
    const preguntas = await Pregunta.findAll();
    return res.status(200).json(preguntas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las preguntas.' });
  }
};

const getPreguntaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pregunta = await Pregunta.findByPk(id);

    if (!pregunta) {
      return res.status(404).json({ error: 'Pregunta no encontrada.' });
    }

    return res.status(200).json(pregunta);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la pregunta.' });
  }
};

const deletePregunta = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pregunta.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: 'Pregunta no encontrada.' });
    }

    return res.status(200).json({ message: 'Pregunta eliminada exitosamente.' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la pregunta.' });
  }
};

const searchPreguntas = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'El parámetro "query" es obligatorio.' });
    }

    const preguntas = await Pregunta.findAll({
      where: {
        question: { [Op.like]: `%${query}%` },
      },
    });

    return res.status(200).json(preguntas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al buscar preguntas.' });
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
    createPregunta,
    getPreguntas,
    getPreguntaById,
    deletePregunta,
    searchPreguntas,
    clearPreguntas
  };
