// src/routes/perfilInversionRoutes.js
const express = require('express');
const router = express.Router();
const perfilInversionController = require('../controllers/perfilInversionController');

router.post('/', perfilInversionController.createPerfilInversion);
router.get('/', perfilInversionController.getAllPerfilInversiones);
router.get('/:id', perfilInversionController.getPerfilInversionById);
router.put('/:id', perfilInversionController.updatePerfilInversion);
router.delete('/:id', perfilInversionController.deletePerfilInversion);
router.delete('/clear', perfilInversionController.clearPerfilInversiones);

module.exports = router;
