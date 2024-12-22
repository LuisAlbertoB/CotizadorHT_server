const express = require('express');
const router = express.Router();
const SolicitudController = require('../controllers/solicitudController');

router.post('/', SolicitudController.createSolicitud);
router.get('/', SolicitudController.getSolicitudes);
router.get('/:id', SolicitudController.getSolicitudById);
router.put('/:id', SolicitudController.updateSolicitud);
router.delete('/:id', SolicitudController.deleteSolicitud);
router.delete('/clear', SolicitudController.deleteAllSolicitudes);

module.exports = router;
