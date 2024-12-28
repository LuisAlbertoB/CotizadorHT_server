const { Modulo } = require('../models');

const getAllModulos = async (req, res) => {
  try {
    const modulos = await Modulo.findAll();
    return res.status(200).json(modulos);
  } catch (error) {
    console.error('Error fetching modulos:', error);
    return res.status(500).json({ error: 'Error fetching modulos' });
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
  getAllModulos,
  clearModulos,
};
