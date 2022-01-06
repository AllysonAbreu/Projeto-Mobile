const res = require("express/lib/response")
const Cadastro = require('../models/turmas')

module.exports = app => {

  app.get('/turma', (req,res) => {
    Cadastro.lista(res)
  })

  app.get('/turma/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.buscaPorId(id, res)
  })

  app.post('/cadturma', (req,res) => {
    const cadastro = req.body

    Cadastro.adiciona(cadastro,res)
  })

  //modificar turma criada
  app.patch('/cadturma/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Cadastro.altera(id,valores,res)
  })

  app.delete('/cadturma/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.deleta(id, res)
  })
    
}