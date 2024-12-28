const { Funcionalidad } = require('../models');

const getAllFuncionalidades = async (req, res) => {
  try {
    const funcionalidades = await Funcionalidad.findAll();
    return res.status(200).json(funcionalidades);
  } catch (error) {
    console.error('Error fetching funcionalidades:', error);
    return res.status(500).json({ error: 'Error fetching funcionalidades' });
  }
};

const clearFuncionalidades = async (req, res) => {
  try {
    await Funcionalidad.destroy({ where: {} });
    return res.status(200).json({ message: 'All funcionalidades deleted' });
  } catch (error) {
    console.error('Error clearing funcionalidades:', error);
    return res.status(500).json({ error: 'Error clearing funcionalidades' });
  }
};

module.exports = {
  getAllFuncionalidades,
  clearFuncionalidades,
};
