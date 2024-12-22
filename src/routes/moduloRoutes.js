const express = require('express');
const router = express.Router();
const moduloController = require('../controllers/moduloController');

router.post('/', moduloController.createModulo);
router.get('/', moduloController.getAllModulos);
router.get('/:id', moduloController.getModuloById);
router.put('/:id', moduloController.updateModulo);
router.delete('/:id', moduloController.deleteModulo);
router.delete('/clear', moduloController.clearModulos);  // Vaciar la tabla

module.exports = router;
