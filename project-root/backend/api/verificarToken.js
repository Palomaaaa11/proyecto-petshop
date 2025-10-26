const {verificarToken} = require('@damianegreco/hashpass');
const {TOKEN_SECRET} = process.env;

const verificarTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    const verificacion = verificarToken(TOKEN_SECRET, token);

    if (verificacion?.data){
        req.usuario = verificacion.data;
        next();
    } else {
        res.status(401).send('Sin permisos');
    }
};

module.exports = verificarTokenMiddleware;


