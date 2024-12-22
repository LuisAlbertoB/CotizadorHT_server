const { Solicitud } = require('../models');

class SolicitudController {

  static async createSolicitud(req, res) {
    try {
      const { company_name, phone_number, mail, web_page, financial_score, id_perfil_inversion } = req.body;

      const newSolicitud = await Solicitud.create({
        company_name,
        phone_number,
        mail,
        web_page,
        financial_score,
        id_perfil_inversion,
      });

      return res.status(201).json(newSolicitud);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getSolicitudes(req, res) {
    try {
      const solicitudes = await Solicitud.findAll({
        include: {
          model: require('../models').PerfilInversion,
          as: 'perfilInversion',
        },
      });
      return res.status(200).json(solicitudes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getSolicitudById(req, res) {
    try {
      const { id } = req.params;
      const solicitud = await Solicitud.findByPk(id, {
        include: {
          model: require('../models').PerfilInversion,
          as: 'perfilInversion',
        },
      });

      if (!solicitud) {
        return res.status(404).json({ error: 'Solicitud no encontrada' });
      }

      return res.status(200).json(solicitud);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async updateSolicitud(req, res) {
    try {
      const { id } = req.params;
      const { company_name, phone_number, mail, web_page, financial_score, id_perfil_inversion } = req.body;

      const solicitud = await Solicitud.findByPk(id);

      if (!solicitud) {
        return res.status(404).json({ error: 'Solicitud no encontrada' });
      }

      await solicitud.update({
        company_name,
        phone_number,
        mail,
        web_page,
        financial_score,
        id_perfil_inversion,
      });

      return res.status(200).json(solicitud);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async deleteSolicitud(req, res) {
    try {
      const { id } = req.params;
      const solicitud = await Solicitud.findByPk(id);

      if (!solicitud) {
        return res.status(404).json({ error: 'Solicitud no encontrada' });
      }

      await solicitud.destroy();

      return res.status(200).json({ message: 'Solicitud eliminada' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async deleteAllSolicitudes(req, res) {
    try {
      await Solicitud.destroy({ where: {} });
      return res.status(200).json({ message: 'Todas las solicitudes han sido eliminadas' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = SolicitudController;
