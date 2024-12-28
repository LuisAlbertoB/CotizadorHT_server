// src/routes/perfilInversionRoutes.js
const express = require('express');
const router = express.Router();
const perfilInversionController = require('../controllers/perfilInversionController');

router.get('/', perfilInversionController.getAllPerfilInversiones);
router.delete('/clear', perfilInversionController.clearPerfilInversiones);

module.exports = router;
