const database = require('../models')
const {senhaHash, decriptarSenhaHash} = require('../utils/gerarSenhaHash')
const {criarToken} = require('../utils/tokenJwt')

class PessoaController{

  // static async login(req,res) {
  //   try {
  //     const {email, senha} = req.body;
  //     if (!email || !senha) {
  //         return res.status(400).json({
  //             status: 400,
  //             message: "Preencha todos os campos para realizar o login!"
  //         });
  //     }
  //     const verPessoaCadastrada = await database.Pessoas.findOne({where: {email: email}});
  //     if (verPessoaCadastrada) {
  //         if (decriptarSenhaHash(senha, verPessoaCadastrada.senha)) {
  //             const tokenTemporario = criarToken(verPessoaCadastrada);
  //             res.set('Authorization', tokenTemporario)
  //             return res.status(204).send();
  //         }
  //         return res.status(401).json({
  //             status: 401,
  //             message: "Senha inválida"
  //         });
  //     }
  //     return res.status(404).json({
  //         status: 404,
  //         message: "Não foi possível encontrar usuário cadastrado com esse e-mail."
  //     });
  //   } catch (error) {
  //     return res.status(500).json(error.message) 
  //   }
  // }

  static async login(req,res) {
    const token = criarToken(req.user)
    res.set('Authorization', token)
    res.status(204).send()
  }

  static async logout(req,res){
    try {
      const token = req.token
      res.status(204).send()
    } catch (error) {
      res.status(204).json({error:error.message})
    }
  }

  static async pegaTodasAsPessoas(req,res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message) 
    }      
  }

  static async buscaPorEmail(email) {
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: {
           email: email
          }
        })
        return umaPessoa
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req,res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: {
           id: Number(id)
          }
        })
        return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req,res) {
    const criarSenhaHash = senhaHash(req.body.senha)
    const novaPessoa = {...req.body, senha: criarSenhaHash}
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req,res) {
    const novasInfos = req.body
    const { id } = req.params
    try {
      await database.Pessoas.update(novasInfos,{where: {id: Number(id)}})
      const pessoaAtualizada =  await database.Pessoas.findOne({where:{id:Number(id)}})
      return res.status(200).json(pessoaAtualizada) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoa(req,res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({where:{id: Number(id)}})
      return res.status(200).json({mensagem: `Id ${id} deletado.`})
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async pegaTodasAsMatriculas(req,res) {
    try {
      const todasAsMatriculas = await database.Matriculas.findAll()
      return res.status(200).json(todasAsMatriculas)
    } catch (error) {
      return res.status(500).json(error.message) 
    }      
  }

  static async pegaUmaMatricula(req,res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
          }
        })
        return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req,res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req,res) {
    const { estudanteId, matriculaId } = req.params
    const novasInfos = req.body
    try {
      await database.Matriculas.update(novasInfos,{ 
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }})
      const matriculaAtualizada =  await database.Matriculas.findOne({where:{id:Number(matriculaId)}})
      return res.status(200).json(matriculaAtualizada) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula(req,res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: {
        id: Number(matriculaId)
      }})
      return res.status(200).json({mensagem: `Matricula de Id ${matriculaId} deletada.`})
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

  static async pegaTodasAsPostagens(req,res) {
    try {
      const todasAsPostagens = await database.Postagens.findAll()
      return res.status(200).json(todasAsPostagens)
    } catch (error) {
      return res.status(500).json(error.message) 
    }      
  }

  static async pegaUmaPostagem(req,res) {
    const { usuarioId, postagemId } = req.params
    try {
      const umaPostagem = await database.Postagens.findOne({
        where: {
          id: Number(postagemId),
          usuario_id: Number(usuarioId)
          }
        })
        return res.status(200).json(umaPostagem)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPostagem(req,res) {
    const { usuarioId } = req.params
    const novaPostagem = { ...req.body, usuario_id: Number(usuarioId) }
    try {
      const novaPostagemCriada = await database.Postagens.create(novaPostagem)
      return res.status(200).json(novaPostagemCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPostagem(req,res) {
    const { usuarioId, postagemId } = req.params
    const novasInfos = req.body
    try {
      await database.Postagens.update(novasInfos,{ 
        where: {
          id: Number(postagemId),
          usuario_id: Number(usuarioId)
        }})
      const postagemAtualizada =  await database.Postagens.findOne({where:{id:Number(postagemId)}})
      return res.status(200).json(postagemAtualizada) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPostasgem(req,res) {
    const { usuarioId, postagemId } = req.params
    try {
      await database.Postagens.destroy({ where: {
        id: Number(postagemId)
      }})
      return res.status(200).json({mensagem: `Postagem de Id ${postagemId} deletada.`})
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }

}
module.exports = PessoaController