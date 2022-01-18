const {jwt: {parseToken}} = require('../utils');

exports.checarToken = function (req, res, next) {
    try {
        const {token} = req.headers;
        if (!token) {
            return res.status(401).json({
                status: 401,
                message: "Não tem autorização! É necessário Token JWT!"
            });
        }
        req.user = parseToken(token.split(' ')[1]);
        next();
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.toString()
        });
    }
};