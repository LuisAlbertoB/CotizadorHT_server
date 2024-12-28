const { Solicitud } = require('../models');

const getAllSolicitud = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll();
    return res.status(200).json(solicitudes);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las solicitudes.' });
  }
};

const clearSolicitud = async (req, res) => {
  try {
    await Solicitud.destroy({ where: {} });
    return res.status(200).json({ message: 'Todas las solicitudes han sido eliminadas.' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar las solicitudes.' });
  }
};

module.exports = {
  getAllSolicitud,
  clearSolicitud,
};