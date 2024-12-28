const express = require('express');
const router = express.Router();

const preguntaController = require('../controllers/preguntaController');

router.get('/', preguntaController.getPreguntas);
router.delete('/clear', preguntaController.clearPreguntas);

module.exports = router;
