const express = require('express');
const router = express.Router();
const solicitudrespuestaController = require('../controllers/solicitudrespuestaController');

router.post('/', solicitudrespuestaController.createSolicitudRespuesta);
router.get('/', solicitudrespuestaController.getAllSolicitudRespuestas);
router.get('/:id', solicitudrespuestaController.getSolicitudRespuestaById);
router.put('/:id', solicitudrespuestaController.updateSolicitudRespuesta);
router.delete('/:id', solicitudrespuestaController.deleteSolicitudRespuesta);

module.exports = router;
