require('dotenv').config();
const router = require('express').Router();;
const db = require('../../conexiondb');


const {verificarPass, generarToken} = require('@damianegreco/hashpass');

router.post('/', function (req, res, next) {
    const {correo, contraseña} = req.body;

    let sql = "SELECT id_usuario, nombre, correo, contraseña, rol FROM usuarios WHERE correo = ?";
    db.query(sql, [correo])
    .then(([usuarios]) => {
        if (usuarios.length === 1) {
            const usuario = usuarios[0];

            if (verificarPass(contraseña, usuario.contraseña)) {
                const datos = {
                    id_usuario: usuario.id_usuario,
                    nombre: usuario.nombre,
                    correo: usuario.correo,
                    rol: usuario.rol
                };

                const token = generarToken(process.env.TOKEN_SECRET, 6, datos);
                res.json({status: 'ok', token});
            } else {
                res.status(401).send('Correo o contraseña incorrectos');
            }
        } else {
            res.status(401).send('Correo o contraseña incorrectos');
        }
    })
    .catch((error) => {
        console.error("Error al obtener el usuario", error);
        res.status(500).send('Error al obtener el usuario');
    });
});



module.exports = router;