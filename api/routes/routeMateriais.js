const { Router } = require('express')
const MateriaController = require('../controllers/MateriaisController')
const middlewaresAutenticacao = require('../middlewares/middlewares-autenticacao')


const router = Router()

router
  .get('/materiais', 
      MateriaController.pegaTodasOsMateriais)
  .get('/materiais/:id', 
      MateriaController.pegaUmMaterial)
  .post('/materiais',
    middlewaresAutenticacao.bearer,
       MateriaController.criaMaterial)
  .put('/materiais/:id',
      middlewaresAutenticacao.bearer,
        MateriaController.atualizaMaterial)
  .delete('/materiais/:id', 
      middlewaresAutenticacao.bearer,
        MateriaController.apagaMaterial)
  .get('/materiais/:docenteId/codigo/:materialId', 
      middlewaresAutenticacao.bearer,
        MateriaController.pegaUmMaterial)

module.exports = router