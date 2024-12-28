const { PerfilInversion } = require('../models');

const getAllPerfilInversiones = async (req, res) => {
  try {
    const perfilInversiones = await PerfilInversion.findAll();
    return res.status(200).json({
      message: 'Perfil de inversiones obtenidos exitosamente',
      perfilInversiones,
    });
  } catch (error) {
    console.error('Error fetching perfilInversiones:', error);
    return res.status(500).json({ error: 'Error obteniendo perfiles de inversión' });
  }
};

const clearPerfilInversiones = async (req, res) => {
  try {
    await PerfilInversion.destroy({ where: {} });
    return res.status(200).json({ message: 'Todos los perfiles de inversión eliminados exitosamente' });
  } catch (error) {
    console.error('Error clearing perfilInversiones:', error);
    return res.status(500).json({ error: 'Error limpiando perfiles de inversión' });
  }
};

module.exports = {
  getAllPerfilInversiones,
  clearPerfilInversiones,
};
