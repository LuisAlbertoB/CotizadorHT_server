const { SolicitudRespuesta, Solicitud, Pregunta, Respuesta } = require('../models');

const createSolicitudRespuesta = async (req, res) => {
  try {
    const { id_solicitud, id_pregunta, id_respuesta } = req.body;

    const solicitud = await Solicitud.findByPk(id_solicitud);
    const pregunta = await Pregunta.findByPk(id_pregunta);
    const respuesta = await Respuesta.findByPk(id_respuesta);

    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    if (!pregunta) {
      return res.status(404).json({ error: 'Pregunta no encontrada' });
    }
    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta no encontrada' });
    }

    const existingSolicitudRespuesta = await SolicitudRespuesta.findOne({
      where: {
        id_solicitud,
        id_pregunta,
        id_respuesta,
      },
    });

    if (existingSolicitudRespuesta) {
      return res.status(400).json({ error: 'Esta combinación de solicitud, pregunta y respuesta ya existe' });
    }

    const newSolicitudRespuesta = await SolicitudRespuesta.create({
      id_solicitud,
      id_pregunta,
      id_respuesta,
    });

    return res.status(201).json(newSolicitudRespuesta);
  } catch (error) {
    console.error('Error creating solicitudrespuesta:', error);
    return res.status(500).json({ error: 'Error creating solicitudrespuesta' });
  }
};

const getAllSolicitudRespuestas = async (req, res) => {
  try {
    const solicitudRespuestas = await SolicitudRespuesta.findAll();
    return res.status(200).json(solicitudRespuestas);
  } catch (error) {
    console.error('Error fetching solicitudrespuestas:', error);
    return res.status(500).json({ error: 'Error fetching solicitudrespuestas' });
  }
};

const getSolicitudRespuestaById = async (req, res) => {
  try {
    const solicitudRespuesta = await SolicitudRespuesta.findByPk(req.params.id);
    if (!solicitudRespuesta) {
      return res.status(404).json({ error: 'SolicitudRespuesta no encontrada' });
    }
    return res.status(200).json(solicitudRespuesta);
  } catch (error) {
    console.error('Error fetching solicitudrespuesta by ID:', error);
    return res.status(500).json({ error: 'Error fetching solicitudrespuesta' });
  }
};

const updateSolicitudRespuesta = async (req, res) => {
  try {
    const solicitudRespuesta = await SolicitudRespuesta.findByPk(req.params.id);
    if (!solicitudRespuesta) {
      return res.status(404).json({ error: 'SolicitudRespuesta no encontrada' });
    }

    const { id_solicitud, id_pregunta, id_respuesta } = req.body;

    const existingSolicitudRespuesta = await SolicitudRespuesta.findOne({
      where: {
        id_solicitud,
        id_pregunta,
        id_respuesta,
      },
    });

    if (existingSolicitudRespuesta) {
      return res.status(400).json({ error: 'Esta combinación de solicitud, pregunta y respuesta ya existe' });
    }

    await solicitudRespuesta.update({
      id_solicitud,
      id_pregunta,
      id_respuesta,
    });

    return res.status(200).json(solicitudRespuesta);
  } catch (error) {
    console.error('Error updating solicitudrespuesta:', error);
    return res.status(500).json({ error: 'Error updating solicitudrespuesta' });
  }
};

const deleteSolicitudRespuesta = async (req, res) => {
  try {
    const solicitudRespuesta = await SolicitudRespuesta.findByPk(req.params.id);
    if (!solicitudRespuesta) {
      return res.status(404).json({ error: 'SolicitudRespuesta no encontrada' });
    }
    await solicitudRespuesta.destroy();
    return res.status(200).json({ message: 'SolicitudRespuesta eliminada' });
  } catch (error) {
    console.error('Error deleting solicitudrespuesta:', error);
    return res.status(500).json({ error: 'Error deleting solicitudrespuesta' });
  }
};

module.exports = {
  createSolicitudRespuesta,
  getAllSolicitudRespuestas,
  getSolicitudRespuestaById,
  updateSolicitudRespuesta,
  deleteSolicitudRespuesta,
};
