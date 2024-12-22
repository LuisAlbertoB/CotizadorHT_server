const { Respuesta } = require('../models');

const createRespuesta = async (req, res) => {
  try {
    const { id_pregunta, answer, value } = req.body;
    const newRespuesta = await Respuesta.create({ id_pregunta, answer, value });
    return res.status(201).json(newRespuesta);
  } catch (error) {
    console.error('Error creating respuesta:', error);
    return res.status(500).json({ error: 'Error creating respuesta' });
  }
};

const getAllRespuestas = async (req, res) => {
  try {
    const respuestas = await Respuesta.findAll();
    return res.status(200).json(respuestas);
  } catch (error) {
    console.error('Error fetching respuestas:', error);
    return res.status(500).json({ error: 'Error fetching respuestas' });
  }
};

const getRespuestaById = async (req, res) => {
  try {
    const respuesta = await Respuesta.findByPk(req.params.id);
    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta not found' });
    }
    return res.status(200).json(respuesta);
  } catch (error) {
    console.error('Error fetching respuesta by ID:', error);
    return res.status(500).json({ error: 'Error fetching respuesta' });
  }
};

const updateRespuesta = async (req, res) => {
  try {
    const respuesta = await Respuesta.findByPk(req.params.id);
    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta not found' });
    }
    const { id_pregunta, answer, value } = req.body;
    await respuesta.update({ id_pregunta, answer, value });
    return res.status(200).json(respuesta);
  } catch (error) {
    console.error('Error updating respuesta:', error);
    return res.status(500).json({ error: 'Error updating respuesta' });
  }
};

const deleteRespuesta = async (req, res) => {
  try {
    const respuesta = await Respuesta.findByPk(req.params.id);
    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta not found' });
    }
    await respuesta.destroy();
    return res.status(200).json({ message: 'Respuesta deleted' });
  } catch (error) {
    console.error('Error deleting respuesta:', error);
    return res.status(500).json({ error: 'Error deleting respuesta' });
  }
};

const clearRespuestas = async (req, res) => {
  try {
    await Respuesta.destroy({ where: {} });
    return res.status(200).json({ message: 'All respuestas deleted' });
  } catch (error) {
    console.error('Error clearing respuestas:', error);
    return res.status(500).json({ error: 'Error clearing respuestas' });
  }
};

module.exports = {
  createRespuesta,
  getAllRespuestas,
  getRespuestaById,
  updateRespuesta,
  deleteRespuesta,
  clearRespuestas,
};
