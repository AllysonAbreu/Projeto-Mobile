const passport = require("passport")
const localStrategy = require("passport-local")
const bearerStrategy = require('passport-http-bearer').Strategy
const bcrypt = require('bcrypt')

const Pessoas = require('../controllers/PessoaController')

const {InvalidArgumentError} = require("../erros")



function verificarUsuario(user){
  if(!user){
    throw new InvalidArgumentError('Não existe usuário cadastrado com esse e-mail!')
  }
}

async function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha,senhaHash)

  if(!senhaValida) {
    throw new InvalidArgumentError('E-mail ou senha inválidos.')
  }
}


passport.use( 
  new localStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false
  }, async (email, senha, done) => {
    try {
      const user = await Pessoas.buscaPorEmail(email)
      verificarUsuario(user)
      await verificaSenha(senha, user.senha)

      done(null, user)
    } catch (error) {
      done(error)      
    }
  })
)

passport.use(
  new bearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.CHAVE_JWT)
        const user = await Pessoas.pegaUmaPessoa(payload.id)
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
)