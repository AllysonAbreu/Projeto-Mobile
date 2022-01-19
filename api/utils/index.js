exports.senha = require('./gerarSenhaHash');
exports.jwt = require('./tokenJwt');

module.exports = {
  estrategiaAutenticacao: require('./estrategias-autenticacao'),
}