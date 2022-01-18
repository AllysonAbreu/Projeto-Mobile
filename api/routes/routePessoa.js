const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const {checarJwt: {checarToken}} = require('../middlewares');

const router = Router()

router
.post('/login', PessoaController.login)
.get('/pessoas', checarToken, PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', checarToken, PessoaController.pegaUmaPessoa)
.post('/pessoas', checarToken, PessoaController.criaPessoa)
.put('/pessoas/:id', checarToken, PessoaController.atualizaPessoa)
.delete('/pessoas/:id', checarToken, PessoaController.apagaPessoa)
.get('/matriculas', checarToken, PessoaController.pegaTodasAsMatriculas)
.get('/pessoas/:estudanteId/matricula/:matriculaId', checarToken, PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', checarToken, PessoaController.criaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId', checarToken, PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', checarToken, PessoaController.apagaMatricula)
.get('/postagens', checarToken, PessoaController.pegaTodasAsPostagens)
.get('/pessoas/:usuarioId/postagens/:postagemId', checarToken, PessoaController.pegaUmaPostagem)
.post('/pessoas/:usuarioId/postagens', checarToken, PessoaController.criaPostagem)
.put('/pessoas/:usuarioId/postagens/:postagemId', checarToken, PessoaController.atualizaPostagem)
.delete('/pessoas/:usuarioId/postagens/:postagemId', checarToken, PessoaController.apagaPostasgem)


module.exports = router