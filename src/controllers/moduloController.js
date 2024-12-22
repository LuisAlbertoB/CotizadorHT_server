const { Modulo } = require('../models');

const createModulo = async (req, res) => {
  try {
    const { tag, description } = req.body;
    const newModulo = await Modulo.create({ tag, description });
    return res.status(201).json(newModulo);
  } catch (error) {
    console.error('Error creating modulo:', error);
    return res.status(500).json({ error: 'Error creating modulo' });
  }
};

const getAllModulos = async (req, res) => {
  try {
    const modulos = await Modulo.findAll();
    return res.status(200).json(modulos);
  } catch (error) {
    console.error('Error fetching modulos:', error);
    return res.status(500).json({ error: 'Error fetching modulos' });
  }
};

const getModuloById = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      return res.status(404).json({ error: 'Modulo not found' });
    }
    return res.status(200).json(modulo);
  } catch (error) {
    console.error('Error fetching modulo by ID:', error);
    return res.status(500).json({ error: 'Error fetching modulo' });
  }
};

const updateModulo = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      return res.status(404).json({ error: 'Modulo not found' });
    }
    const { tag, description } = req.body;
    await modulo.update({ tag, description });
    return res.status(200).json(modulo);
  } catch (error) {
    console.error('Error updating modulo:', error);
    return res.status(500).json({ error: 'Error updating modulo' });
  }
};

const deleteModulo = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      return res.status(404).json({ error: 'Modulo not found' });
    }
    await modulo.destroy();
    return res.status(200).json({ message: 'Modulo deleted' });
  } catch (error) {
    console.error('Error deleting modulo:', error);
    return res.status(500).json({ error: 'Error deleting modulo' });
  }
};

const clearModulos = async (req, res) => {
  try {
    await Modulo.destroy({ where: {} });
    return res.status(200).json({ message: 'All modulos deleted' });
  } catch (error) {
    console.error('Error clearing modulos:', error);
    return res.status(500).json({ error: 'Error clearing modulos' });
  }
};

module.exports = {
  createModulo,
  getAllModulos,
  getModuloById,
  updateModulo,
  deleteModulo,
  clearModulos,
};
