const express = require('express');
const router = express.Router();
const respuestaController = require('../controllers/respuestaController');

router.post('/', respuestaController.createRespuesta);
router.get('/', respuestaController.getAllRespuestas);
router.get('/:id', respuestaController.getRespuestaById);
router.put('/:id', respuestaController.updateRespuesta);
router.delete('/:id', respuestaController.deleteRespuesta);
router.delete('/clear', respuestaController.clearRespuestas); // Vaciar la tabla

module.exports = router;
