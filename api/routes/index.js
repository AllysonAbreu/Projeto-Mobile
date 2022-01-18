const bodyParser = require('body-parser')
const pessoas = require('./routePessoa')
const turmas = require('./routeTurmas')
const materiais = require('./routeMateriais')


module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    turmas,
    materiais,
    ) 
}