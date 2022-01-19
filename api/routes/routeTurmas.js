const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
const middlewaresAutenticacao = require('../middlewares/middlewares-autenticacao')


const router = Router()

router
  .get('/turmas',
       TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', 
        TurmaController.pegaUmaTurma)
  .post('/turmas',
      middlewaresAutenticacao.bearer,
        TurmaController.criaTurma)
  .put('/turmas/:id',
      middlewaresAutenticacao.bearer,
        TurmaController.atualizaTurma)
  .delete('/turmas/:id',
      middlewaresAutenticacao.bearer,
         TurmaController.apagaTurma)

module.exports = router
