
const {verificarToken} = require('@damianegreco/hashpass');
require('dotenv').config();

const verificarTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    console.log("HEADER AUTHORIZATION:", req.headers.authorization);

    const TOKEN_SECRET = process.env.TOKEN_SECRET;
    console.log("TOKEN_SECRET MIDDLEWARE:", TOKEN_SECRET);


    const verificacion = verificarToken(process.env.TOKEN_SECRET, token);
    console.log('Resultado verificación:', verificacion);

    if (verificacion?.data){
        req.usuario = verificacion.data;
        next();
    } else {
        res.status(401).send('Sin permisos');
    }
};

module.exports = verificarTokenMiddleware;


