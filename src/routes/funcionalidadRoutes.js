const express = require('express');
const router = express.Router();
const funcionalidadController = require('../controllers/funcionalidadController');

router.post('/', funcionalidadController.createFuncionalidad);
router.get('/', funcionalidadController.getAllFuncionalidades);
router.get('/:id', funcionalidadController.getFuncionalidadById);
router.put('/:id', funcionalidadController.updateFuncionalidad);
router.delete('/:id', funcionalidadController.deleteFuncionalidad);
router.delete('/clear', funcionalidadController.clearFuncionalidades);

module.exports = router;
