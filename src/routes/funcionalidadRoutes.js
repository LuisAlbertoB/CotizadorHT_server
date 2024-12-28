const express = require('express');
const router = express.Router();
const funcionalidadController = require('../controllers/funcionalidadController');

router.get('/', funcionalidadController.getAllFuncionalidades);
router.delete('/clear', funcionalidadController.clearFuncionalidades);

module.exports = router;
