const { PerfilFuncionalidad, PerfilInversion, Funcionalidad } = require('../models');

const getAllPerfilFuncionalidades = async (req, res) => {
  try {
    const perfilFuncionalidades = await PerfilFuncionalidad.findAll();
    return res.status(200).json(perfilFuncionalidades);
  } catch (error) {
    console.error('Error fetching perfilFuncionalidades:', error);
    return res.status(500).json({ error: 'Error fetching perfilFuncionalidades' });
  }
};

const clearPerfilFuncionalidades = async (req, res) => {
  try {
    await PerfilFuncionalidad.destroy({ where: {} });
    return res.status(200).json({ message: 'All perfilFuncionalidades deleted' });
  } catch (error) {
    console.error('Error clearing perfilFuncionalidades:', error);
    return res.status(500).json({ error: 'Error clearing perfilFuncionalidades' });
  }
};

module.exports = {
  getAllPerfilFuncionalidades,
  clearPerfilFuncionalidades
};
