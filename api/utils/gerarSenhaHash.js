const bcrypt = require('bcrypt')

exports.senhaHash = function (senha) {
  return bcrypt.hashSync(senha, 12)
}

exports.decriptarSenhaHash = function(senha, senhaHash) {
  return bcrypt.compareSync(senha, senhaHash)
}