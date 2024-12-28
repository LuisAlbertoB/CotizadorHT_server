const express = require('express');
const router = express.Router();
const perfilFuncionalidadController = require('../controllers/perfilFuncionalidadController');

router.get('/', perfilFuncionalidadController.getAllPerfilFuncionalidades);
router.delete('/clear', perfilFuncionalidadController.clearPerfilFuncionalidades);

module.exports = router;
