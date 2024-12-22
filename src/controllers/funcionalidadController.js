const { Funcionalidad } = require('../models');

const createFuncionalidad = async (req, res) => {
  try {
    const { tag, description, developmentTime, developmentRate, idModulo } = req.body;
    const newFuncionalidad = await Funcionalidad.create({ tag, description, developmentTime, developmentRate, idModulo });
    return res.status(201).json(newFuncionalidad);
  } catch (error) {
    console.error('Error creating funcionalidad:', error);
    return res.status(500).json({ error: 'Error creating funcionalidad' });
  }
};

const getAllFuncionalidades = async (req, res) => {
  try {
    const funcionalidades = await Funcionalidad.findAll();
    return res.status(200).json(funcionalidades);
  } catch (error) {
    console.error('Error fetching funcionalidades:', error);
    return res.status(500).json({ error: 'Error fetching funcionalidades' });
  }
};

const getFuncionalidadById = async (req, res) => {
  try {
    const funcionalidad = await Funcionalidad.findByPk(req.params.id);
    if (!funcionalidad) {
      return res.status(404).json({ error: 'Funcionalidad not found' });
    }
    return res.status(200).json(funcionalidad);
  } catch (error) {
    console.error('Error fetching funcionalidad by ID:', error);
    return res.status(500).json({ error: 'Error fetching funcionalidad' });
  }
};

const updateFuncionalidad = async (req, res) => {
  try {
    const funcionalidad = await Funcionalidad.findByPk(req.params.id);
    if (!funcionalidad) {
      return res.status(404).json({ error: 'Funcionalidad not found' });
    }
    const { tag, description, developmentTime, developmentRate, idModulo } = req.body;
    await funcionalidad.update({ tag, description, developmentTime, developmentRate, idModulo });
    return res.status(200).json(funcionalidad);
  } catch (error) {
    console.error('Error updating funcionalidad:', error);
    return res.status(500).json({ error: 'Error updating funcionalidad' });
  }
};

const deleteFuncionalidad = async (req, res) => {
  try {
    const funcionalidad = await Funcionalidad.findByPk(req.params.id);
    if (!funcionalidad) {
      return res.status(404).json({ error: 'Funcionalidad not found' });
    }
    await funcionalidad.destroy();
    return res.status(200).json({ message: 'Funcionalidad deleted' });
  } catch (error) {
    console.error('Error deleting funcionalidad:', error);
    return res.status(500).json({ error: 'Error deleting funcionalidad' });
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
  createFuncionalidad,
  getAllFuncionalidades,
  getFuncionalidadById,
  updateFuncionalidad,
  deleteFuncionalidad,
  clearFuncionalidades,
};
