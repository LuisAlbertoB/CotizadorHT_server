const { PerfilInversion } = require('../models');

const createPerfilInversion = async (req, res) => {
  try {
    const { tag, description, min_score_threshold, max_score_threshold } = req.body;
    const newPerfilInversion = await PerfilInversion.create({
      tag,
      description,
      min_score_threshold,
      max_score_threshold,
    });
    return res.status(201).json({
      message: 'Perfil de inversión creado exitosamente',
      perfilInversion: newPerfilInversion,
    });
  } catch (error) {
    console.error('Error creating perfilInversion:', error);
    return res.status(500).json({ error: 'Error creando perfil de inversión' });
  }
};

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

const getPerfilInversionById = async (req, res) => {
  try {
    const perfilInversion = await PerfilInversion.findByPk(req.params.id);
    if (!perfilInversion) {
      return res.status(404).json({ error: 'Perfil de inversión no encontrado' });
    }
    return res.status(200).json(perfilInversion);
  } catch (error) {
    console.error('Error fetching perfilInversion by ID:', error);
    return res.status(500).json({ error: 'Error obteniendo perfil de inversión' });
  }
};

const updatePerfilInversion = async (req, res) => {
  try {
    const perfilInversion = await PerfilInversion.findByPk(req.params.id);
    if (!perfilInversion) {
      return res.status(404).json({ error: 'Perfil de inversión no encontrado' });
    }
    const { tag, description, min_score_threshold, max_score_threshold } = req.body;
    await perfilInversion.update({
      tag,
      description,
      min_score_threshold,
      max_score_threshold,
    });
    return res.status(200).json(perfilInversion);
  } catch (error) {
    console.error('Error updating perfilInversion:', error);
    return res.status(500).json({ error: 'Error actualizando perfil de inversión' });
  }
};

const deletePerfilInversion = async (req, res) => {
  try {
    const perfilInversion = await PerfilInversion.findByPk(req.params.id);
    if (!perfilInversion) {
      return res.status(404).json({ error: 'Perfil de inversión no encontrado' });
    }
    await perfilInversion.destroy();
    return res.status(200).json({ message: 'Perfil de inversión eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting perfilInversion:', error);
    return res.status(500).json({ error: 'Error eliminando perfil de inversión' });
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
  createPerfilInversion,
  getAllPerfilInversiones,
  getPerfilInversionById,
  updatePerfilInversion,
  deletePerfilInversion,
  clearPerfilInversiones,
};
