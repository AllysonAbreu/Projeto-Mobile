const res = require("express/lib/response")
const Cadastro = require('../models/post')

module.exports = app => {

  app.get('/post', (req,res) => {
    Cadastro.lista(res)
  })

  app.get('/post/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.buscaPorId(id, res)
  })

  app.post('/cadpost', (req,res) => {
    const cadastro = req.body

    Cadastro.adiciona(cadastro,res)
  })

  //modificar turma criada
  app.patch('/cadpost/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Cadastro.altera(id,valores,res)
  })

  app.delete('/cadpost/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.deleta(id, res)
  })
    
}