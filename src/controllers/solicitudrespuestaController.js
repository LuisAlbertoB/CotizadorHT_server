const { SolicitudRespuesta, Solicitud, Pregunta, Respuesta } = require('../models');

const getAllSolicitudRespuestas = async (req, res) => {
  try {
    const solicitudRespuestas = await SolicitudRespuesta.findAll();
    return res.status(200).json(solicitudRespuestas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las respuestas a las solicitudes.' });
  }
};

const clearSolicitudRespuestas = async (req, res) => {
  try {
    await SolicitudRespuesta.destroy({ where: {} });
    return res.status(200).json({ message: 'Todas las respuestas a las solicitudes han sido eliminadas.' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar las respuestas a las solicitudes.' });
  }
};

module.exports = {
  getAllSolicitudRespuestas,
  clearSolicitudRespuestas,
};