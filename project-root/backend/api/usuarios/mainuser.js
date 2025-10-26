const router = require('express').Router();
const db = require('../../conexiondb');

const {hashPass} = require("@damianegreco/hashpass")

const loginRouter = require("./login");

router.use("/login", loginRouter);


router.post('/', function (req, res, next) {
    const {nombre, correo, contraseña} = req.body;

    let sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)";

    const passHasheada = hashPass(contraseña); 
    db.query(sql, [nombre, correo, passHasheada])
    .then(() => {
        res.status(201).send('Usuario creado');
    })
    .catch((error) => {
        console.error("Error al crear el usuario", error);
        res.status(500).send('Error al crear el usuario' );
    });
});

router.get('/', function (req, res, next) {
    let sql = "SELECT * FROM usuarios";
    db.query(sql)
    .then(([usuarios]) => {
        res.status(200).json({usuarios});
    })
    .catch((error) => {
        console.error("Error al obtener los usuarios", error);
        res.status(500).send('Error al obtener los usuarios');
    });
});

module.exports = router;