const express = require('express');
const router = express.Router();
const moduloController = require('../controllers/moduloController');

router.get('/', moduloController.getAllModulos);
router.delete('/clear', moduloController.clearModulos);

module.exports = router;
