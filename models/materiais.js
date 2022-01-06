const moment = require('moment')
const turma = require('../controllers/material')
const conexao = require('../infra/conexao')

class Cadastro {

  //criar e adiciona materiais, possui pequenas validações
  adiciona(material, res) {
    
    // const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = material.titulo.length >= 5

    const validacoes = [
      {
        nome: material.titulo,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um material com esse título.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      // const turmaFormatada = {...turma, dataCriacao}
      const sql = `INSERT INTO Material SET ?` 

      conexao.query(sql, material, (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json(material)
        }
      })
    }
    
  }

  //busca materiais cadastradas no banco
  lista(res){
    const sql = `SELECT * FROM Material`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
  buscaPorId(id, res) {
    const sql = `SELECT * FROM Material WHERE codigo=${id}`

    conexao.query(sql, (erro, resultados) => {
      const turma = resultados[0]
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(turma)
      }
    })

   }

  //atualizar os materiais que estão cadastrados no sistema
  altera(id, valores, res) {    
    
    // const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = valores.titulo.length >= 5

    const validacoes = [
     {
        nome: valores.titulo,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um usuário com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      // const turmaFormatada = {...valores, dataCriacao}

      const sql = `UPDATE Material SET ? WHERE codigo=?`

      conexao.query(sql, [valores,id], (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json({valores, id})
        }
      })
    }   
  }

  //deleta os materiais que estão cadastrados no banco de dados
  deleta(id,res){
    const sql = `DELETE FROM Material WHERE codigo=?`

    conexao.query(sql, id, (erro) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
  }
}

module.exports = new Cadastro