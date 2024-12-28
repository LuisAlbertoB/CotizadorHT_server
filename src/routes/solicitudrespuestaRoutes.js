const express = require('express');
const router = express.Router();
const solicitudrespuestaController = require('../controllers/solicitudrespuestaController');

router.get('/', solicitudrespuestaController.getAllSolicitudRespuestas);
router.delete('/clear', solicitudrespuestaController.clearSolicitudRespuestas);

module.exports = router;
