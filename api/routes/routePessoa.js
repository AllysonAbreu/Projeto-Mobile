const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const middlewaresAutenticacao = require('../middlewares/middlewares-autenticacao')

const router = Router()

router
  .post('/login',
    middlewaresAutenticacao.local,
      PessoaController.login) 
  .get('/logout',
    middlewaresAutenticacao.bearer,
      PessoaController.logout)     
  .get('/pessoas',
      PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id',    
      PessoaController.pegaUmaPessoa)
  .post('/pessoas', 
    PessoaController.criaPessoa)
  .put('/pessoas/:id',
    middlewaresAutenticacao.bearer,
       PessoaController.atualizaPessoa)
  .delete('/pessoas/:id',
    middlewaresAutenticacao.bearer,
      PessoaController.apagaPessoa)
  .get('/matriculas',
    middlewaresAutenticacao.bearer,
      PessoaController.pegaTodasAsMatriculas)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', 
    middlewaresAutenticacao.bearer,
      PessoaController.pegaUmaMatricula)
  .post('/pessoas/:estudanteId/matricula',
    middlewaresAutenticacao.bearer,
      PessoaController.criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', 
    middlewaresAutenticacao.bearer,
      PessoaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', 
    middlewaresAutenticacao.bearer,
      PessoaController.apagaMatricula)
  .get('/postagens',
    middlewaresAutenticacao.bearer,
      PessoaController.pegaTodasAsPostagens)
  .get('/pessoas/:usuarioId/postagens/:postagemId',  
    middlewaresAutenticacao.bearer,
      PessoaController.pegaUmaPostagem)
  .post('/pessoas/:usuarioId/postagens', 
    middlewaresAutenticacao.bearer,
      PessoaController.criaPostagem)
  .put('/pessoas/:usuarioId/postagens/:postagemId',
    middlewaresAutenticacao.bearer,
      PessoaController.atualizaPostagem)
  .delete('/pessoas/:usuarioId/postagens/:postagemId', 
    middlewaresAutenticacao.bearer,
      PessoaController.apagaPostasgem)


module.exports = router