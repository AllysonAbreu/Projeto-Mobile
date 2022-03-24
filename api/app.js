const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const {estrategiasAutenticacao} = require('./utils/estrategias-autenticacao')
const routes = require('./routes')

const app = express()
const port = 3001

app.listen(port, () =>
    console.log(`Servidor está rodando na porta ${port}.`))

app.use(
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
)
routes(app)



module.exports = app