const router = require('express').Router()


const controller = require('../controllers/profissionalController');

router.post('/profissional/cadastrar', controller.casdatrarProfissional);
router.get('/profissionais', controller.obterTodosProfissionais);
router.get('/profissional/obter', controller.obterProfissional);
router.get('/profissional/:id', controller.obterProfissionalPorId);
router.put('/profissional/:id', controller.atualizarProfissional);
router.delete('/profissional/:id', controller.deletarProfissional);


module.exports = router;