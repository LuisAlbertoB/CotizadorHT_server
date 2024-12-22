const express = require('express');
const router = express.Router();
const perfilFuncionalidadController = require('../controllers/perfilFuncionalidadController');

router.post('/', perfilFuncionalidadController.createPerfilFuncionalidad);
router.get('/', perfilFuncionalidadController.getAllPerfilFuncionalidades);
router.get('/:id', perfilFuncionalidadController.getPerfilFuncionalidadById);
router.put('/:id', perfilFuncionalidadController.updatePerfilFuncionalidad);
router.delete('/:id', perfilFuncionalidadController.deletePerfilFuncionalidad);
router.delete('/clear', perfilFuncionalidadController.clearPerfilFuncionalidades); // Vaciar la tabla

module.exports = router;
