const { PerfilFuncionalidad, PerfilInversion, Funcionalidad } = require('../models');

const createPerfilFuncionalidad = async (req, res) => {
  try {
    const { id_perfil, id_funcionalidad } = req.body;

    const perfil = await PerfilInversion.findByPk(id_perfil);
    if (!perfil) {
      return res.status(404).json({ error: 'Perfil not found' });
    }

    const funcionalidad = await Funcionalidad.findByPk(id_funcionalidad);
    if (!funcionalidad) {
      return res.status(404).json({ error: 'Funcionalidad not found' });
    }

    const existingRelation = await PerfilFuncionalidad.findOne({
      where: { id_perfil, id_funcionalidad }
    });

    if (existingRelation) {
      return res.status(400).json({ error: 'This relationship already exists' });
    }

    const newPerfilFuncionalidad = await PerfilFuncionalidad.create({
      id_perfil,
      id_funcionalidad
    });

    return res.status(201).json(newPerfilFuncionalidad);
  } catch (error) {
    console.error('Error creating perfilFuncionalidad:', error);
    return res.status(500).json({ error: 'Error creating perfilFuncionalidad' });
  }
};

const getAllPerfilFuncionalidades = async (req, res) => {
  try {
    const perfilFuncionalidades = await PerfilFuncionalidad.findAll();
    return res.status(200).json(perfilFuncionalidades);
  } catch (error) {
    console.error('Error fetching perfilFuncionalidades:', error);
    return res.status(500).json({ error: 'Error fetching perfilFuncionalidades' });
  }
};

const getPerfilFuncionalidadById = async (req, res) => {
  try {
    const perfilFuncionalidad = await PerfilFuncionalidad.findByPk(req.params.id);
    if (!perfilFuncionalidad) {
      return res.status(404).json({ error: 'PerfilFuncionalidad not found' });
    }
    return res.status(200).json(perfilFuncionalidad);
  } catch (error) {
    console.error('Error fetching perfilFuncionalidad by ID:', error);
    return res.status(500).json({ error: 'Error fetching perfilFuncionalidad' });
  }
};

const updatePerfilFuncionalidad = async (req, res) => {
  try {
    const perfilFuncionalidad = await PerfilFuncionalidad.findByPk(req.params.id);
    if (!perfilFuncionalidad) {
      return res.status(404).json({ error: 'PerfilFuncionalidad not found' });
    }

    const { id_perfil, id_funcionalidad } = req.body;

    const perfil = await PerfilInversion.findByPk(id_perfil);
    const funcionalidad = await Funcionalidad.findByPk(id_funcionalidad);
    if (!perfil || !funcionalidad) {
      return res.status(404).json({ error: 'Perfil or Funcionalidad not found' });
    }

    await perfilFuncionalidad.update({ id_perfil, id_funcionalidad });
    return res.status(200).json(perfilFuncionalidad);
  } catch (error) {
    console.error('Error updating perfilFuncionalidad:', error);
    return res.status(500).json({ error: 'Error updating perfilFuncionalidad' });
  }
};

const deletePerfilFuncionalidad = async (req, res) => {
  try {
    const perfilFuncionalidad = await PerfilFuncionalidad.findByPk(req.params.id);
    if (!perfilFuncionalidad) {
      return res.status(404).json({ error: 'PerfilFuncionalidad not found' });
    }
    await perfilFuncionalidad.destroy();
    return res.status(200).json({ message: 'PerfilFuncionalidad deleted' });
  } catch (error) {
    console.error('Error deleting perfilFuncionalidad:', error);
    return res.status(500).json({ error: 'Error deleting perfilFuncionalidad' });
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
  createPerfilFuncionalidad,
  getAllPerfilFuncionalidades,
  getPerfilFuncionalidadById,
  updatePerfilFuncionalidad,
  deletePerfilFuncionalidad,
  clearPerfilFuncionalidades
};
