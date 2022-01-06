const moment = require('moment')
const turma = require('../controllers/material')
const post = require('../controllers/post')
const conexao = require('../infra/conexao')

class Cadastro {

  //criar e adiciona posts, possui pequenas validações
  adiciona(post, res) {
    
    const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = post.titulo.length >= 5

    const validacoes = [
      {
        nome: post.titulo,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um post com esse título.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const postFormatado = {...post, dataCriacao}
      const sql = `INSERT INTO Post SET ?` 

      conexao.query(sql, postFormatado, (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json(postFormatado)
        }
      })
    }
    
  }

  //busca post cadastrados no banco
  lista(res){
    const sql = `SELECT * FROM Post`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
  buscaPorId(id, res) {
    const sql = `SELECT * FROM Post WHERE codigo=${id}`

    conexao.query(sql, (erro, resultados) => {
      const turma = resultados[0]
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(turma)
      }
    })

   }

  //atualizar os post que estão cadastrados no sistema
  altera(id, valores, res) {    
    
    const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = valores.titulo.length >= 5

    const validacoes = [
     {
        nome: valores.titulo,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um post com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const postFormatado = {...valores, dataCriacao}

      const sql = `UPDATE Post SET ? WHERE codigo=?`

      conexao.query(sql, [postFormatado,id], (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json({valores, id})
        }
      })
    }   
  }

  //deleta os post que estão cadastrados no banco de dados
  deleta(id,res){
    const sql = `DELETE FROM Post WHERE codigo=?`

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