const jwt = require('jsonwebtoken');

const palavraSecreta = process.env.CHAVE_JWT;
/*   Utilize o código abaixo para gerar a palavra secreta, criar o arquivo '.env' e usar a variável de *    ambiente.
*   node -e "console.log(require('crypto').randomBytes(256).toString('base64'))" 
*/

exports.criarToken = function (payload) {
    return jwt.sign(payload.toJSON(), palavraSecreta, {expiresIn: '5min'});
};

exports.parseToken = function (token) {
    return jwt.verify(token, palavraSecreta);
};