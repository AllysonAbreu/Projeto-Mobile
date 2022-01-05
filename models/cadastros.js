const moment = require('moment')
const conexao = require('../infra/conexao')

class Cadastro {

  //criar e adiciona usuários, possui pequenas validações
  adiciona(usuario, res) {
    const dataNascimento = moment(usuario.dataNascimento).format('YYYY-MM-DD HH:mm:ss')
    //const data = moment().format('YYYY-MM-DD')
    
    //const dataEhValida = moment(dataNascimento).isSameOrBefore(data)
    const nomeEhValido = usuario.nome.length >= 5

    const validacoes = [
      //{
        //nome: data,
        //valido: dataEhValida,
        //mensagem: 'Não é possível cadastrar usuário com essa data de aniversário.'
      //},
      {
        nome: 'Nome do do usuário',
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um usuário com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const usuarioFormatado = {...usuario, dataNascimento}
      const sql = `INSERT INTO Usuario SET ?`

      conexao.query(sql, usuarioFormatado, (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json(usuarioFormatado)
        }
      })
    }
    
  }

  //busca usuários cadastrados no banco
  lista(res){
    const sql = `SELECT * FROM Usuario`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
  buscaPorId(id, res) {
    const sql = `SELECT * FROM Usuario WHERE id=${id}`

    conexao.query(sql, (erro, resultados) => {
      const usuario = resultados[0]
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(usuario)
      }
    })

  }

  //atualizar os usuários que estão cadastrados no sistema
  altera(id, valores, res) {
    const dataNascimento = moment(valores.dataNascimento).format('YYYY-MM-DD HH:mm:ss')
    //const data = moment().format('YYYY-MM-DD')
    
    //const dataEhValida = moment(dataNascimento).isSameOrBefore(data)
    const nomeEhValido = valores.nome.length >= 5

    const validacoes = [
      //{
        //nome: data,
        //valido: dataEhValida,
        //mensagem: 'Não é possível cadastrar usuário com essa data de aniversário.'
      //},
      {
        nome: 'Nome do do usuário',
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um usuário com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const usuarioFormatado = {...valores, dataNascimento}

      const sql = `UPDATE Usuario SET ? WHERE id=?`

      conexao.query(sql, [usuarioFormatado,id], (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json({...usuarioFormatado, id})
        }
      })
    }   
  }

  //deleta os usuários que estão cadastrados no banco de dados
  deleta(id,res){
    const sql = `DELETE FROM Usuario WHERE id=?`

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