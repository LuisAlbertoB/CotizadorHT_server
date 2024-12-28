const express = require('express');
const router = express.Router();
const respuestaController = require('../controllers/respuestaController');

router.get('/', respuestaController.getAllRespuestas);
router.delete('/clear', respuestaController.clearRespuestas); // Vaciar la tabla

module.exports = router;
