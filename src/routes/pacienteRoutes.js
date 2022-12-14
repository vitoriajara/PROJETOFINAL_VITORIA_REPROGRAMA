const router = require('express').Router()
const express = require('express');


const controller = require('../controllers/pacienteController');

router.post('/paciente/cadastrar', controller.casdatrarPaciente);
router.get('/pacientes/', controller.obterTodosPacientes)
router.get('/paciente/obter', controller.obterPaciente);
router.get('/paciente/:id', controller.obterPacientePorId);
router.put('/paciente/:id', controller.atualizarPaciente);
router.delete('/paciente/:id', controller.deletarPaciente);

module.exports = router;



