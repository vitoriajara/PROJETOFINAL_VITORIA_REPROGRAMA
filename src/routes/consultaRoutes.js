const router = require('express').Router()


const controller = require('../controllers/consultaController');

router.post('/consulta/descrever', controller.descreverConsulta);
router.get('/consultas/', controller.obterConsultas);
router.get('/consulta/obter', controller.obterconsulta);
router.get('/consulta/:id', controller.obterConsultaPorId);
router.put('/consulta/:id', controller.atualizarConsulta);
router.delete('/consulta/:id', controller.deletarConsulta);

module.exports = router;