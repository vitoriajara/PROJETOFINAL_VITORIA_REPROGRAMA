const express = require('express');
const router = express.Router();

const controller = require('../controllers/profissionalController');

router.post('/profissional/criar', controller.casdatrarProfissional);
router.get('/profissional/buscar', controller.buscarProfissional);
router.get('/profissional/:id', controller.obterProfissionalPorId);
router.delete('/profissional/:id', controller.deletarProfissional);


module.exports = router;