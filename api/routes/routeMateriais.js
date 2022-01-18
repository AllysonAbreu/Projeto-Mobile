const { Router } = require('express')
const PessoaController = require('../controllers/MateriaisController')

const router = Router()

router
.get('/materiais', PessoaController.pegaTodasOsMateriais)
.get('/pessoas/:id', PessoaController.pegaUmMaterial)
.post('/materiais', PessoaController.criaMaterial)
.put('/materiais/:id', PessoaController.atualizaMaterial)
.delete('/materiais/:id', PessoaController.apagaMaterial)
.get('/materiais/:docenteId/codigo/:materialId', PessoaController.pegaUmMaterial)

module.exports = router