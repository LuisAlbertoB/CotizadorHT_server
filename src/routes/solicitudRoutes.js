const express = require('express');
const router = express.Router();
const SolicitudController = require('../controllers/solicitudController');

router.get('/', SolicitudController.getAllSolicitud);
router.delete('/clear', SolicitudController.clearSolicitud);


module.exports = router;
