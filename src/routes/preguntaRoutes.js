const express = require('express');
const router = express.Router();

const preguntaController = require('../controllers/preguntaController');

router.post('/', preguntaController.createPregunta);
router.get('/', preguntaController.getPreguntas);
router.get('/:id', preguntaController.getPreguntaById);
router.delete('/', preguntaController.clearPreguntas);
router.delete('/:id', preguntaController.deletePregunta);
router.get('/search', preguntaController.searchPreguntas);

module.exports = router;
