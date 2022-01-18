const jwt = require('jsonwebtoken');
const palavraSecreta = 'batatinha_Frita_123';

exports.criarToken = function (payload) {
    return jwt.sign(payload.toJSON(), palavraSecreta, {expiresIn: '1min'});
};

exports.parseToken = function (token) {
    return jwt.verify(token, palavraSecreta);
};