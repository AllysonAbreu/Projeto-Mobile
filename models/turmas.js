const moment = require('moment')
const turma = require('../controllers/turma')
const conexao = require('../infra/conexao')

class Cadastro {

  //criar e adiciona turmas, possui pequenas validações
  adiciona(turma, res) {
    
    const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = turma.nome.length >= 5

    const validacoes = [
      {
        nome: turma.nome,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um usuário com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const turmaFormatada = {...turma, dataCriacao}
      const sql = `INSERT INTO Turma SET ?` 

      conexao.query(sql, turmaFormatada, (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json(turmaFormatada)
        }
      })
    }
    
  }

  //busca turmas cadastradas no banco
  lista(res){
    const sql = `SELECT * FROM Turma`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
  buscaPorId(id, res) {
    const sql = `SELECT * FROM Turma WHERE codigo=${id}`

    conexao.query(sql, (erro, resultados) => {
      const turma = resultados[0]
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(turma)
      }
    })

   }

  //atualizar os turmas que estão cadastrados no sistema
  altera(id, valores, res) {    
    
    const dataCriacao = moment().format('YYYY-MM-DD')
    
    const nomeEhValido = valores.nome.length >= 5

    const validacoes = [
     {
        nome: turma.nome,
        valido: nomeEhValido,
        mensagem: 'Não é possível cadastrar um usuário com esse nome.'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const turmaFormatada = {...valores, dataCriacao}

      const sql = `UPDATE Turma SET ? WHERE codigo=?`

      conexao.query(sql, [turmaFormatada,id], (erro) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(200).json({...turmaFormatada, id})
        }
      })
    }   
  }

  //deleta os usuários que estão cadastrados no banco de dados
  deleta(id,res){
    const sql = `DELETE FROM Turma WHERE codigo=?`

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