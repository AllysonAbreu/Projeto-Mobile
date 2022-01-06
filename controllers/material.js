const res = require("express/lib/response")
const Cadastro = require('../models/materiais')

module.exports = app => {

  app.get('/material', (req,res) => {
    Cadastro.lista(res)
  })

  app.get('/material/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.buscaPorId(id, res)
  })

  app.post('/cadmat', (req,res) => {
    const cadastro = req.body

    Cadastro.adiciona(cadastro,res)
  })

  //modificar turma criada
  app.patch('/cadmat/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Cadastro.altera(id,valores,res)
  })

  app.delete('/cadmat/:id', (req,res) => {
    const id = parseInt(req.params.id)

    Cadastro.deleta(id, res)
  })
    
}