const { Respuesta } = require('../models');

const getAllRespuestas = async (req, res) => {
  try {
    const respuestas = await Respuesta.findAll();
    return res.status(200).json(respuestas);
  } catch (error) {
    console.error('Error fetching respuestas:', error);
    return res.status(500).json({ error: 'Error fetching respuestas' });
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
  getAllRespuestas,
  clearRespuestas,
};
