const res = require("express/lib/response")
const Cadastro = require('../models/usuarios')

module.exports = app => {
  app.get('/', (req,res) => res.send('Você está na rota para logar no aplicativo.'))

  app.get('/usuarios', (req,res) => {
    Cadastro.lista(res)
  })

  app.get('/usuarios/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.buscaPorId(id, res)
  })

  app.post('/cadastro', (req,res) => {
    const cadastro = req.body

    Cadastro.adiciona(cadastro,res)
  })

  app.patch('/cadastro/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Cadastro.altera(id,valores,res)
  })

  app.delete('/cadastro/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.deleta(id, res)
  })
    
}