const router = require('express').Router();
const db = require('../../conexiondb');
const fileUpload = require('express-fileupload');
const path = require('path');

router.use(fileUpload());


const dirArchivos = path.join(__dirname, '..', '..', 'archivos');


router.post('/', (req, res, next) => {
    const {nombre, categoria, precio, stock} = req.body;
    let nombreImg = null;
    
    if(req.files && req.files.imagen){
        const imagen = req.files.imagen;
        nombreImg = Date.now() + "_" + imagen.name;
        const rutaImg = path.join(dirArchivos, nombreImg);

        imagen.mv(rutaImg, function(error) {
            if (error) {
                console.error("Error al guardar la imagen: ", error);
                return res.status(500).json({ mensaje: "Error al guardar la imagen" });
            }
        });
    }
    
    let sql = "INSERT INTO productos (nombre, categoria, precio, imagen, stock) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [nombre, categoria, precio, nombreImg, stock])
    .then((resultado) => {
        res.status(201).send('Producto creado correctamente');
    })
    .catch((error) => {
        console.error("Error al crear el producto", error);
        res.status(500).send('Error al crear el producto' );
    });
});


router.get('/', function (req, res, next) {
    let sql = "SELECT nombre, categoria, precio, imagen, stock FROM productos";

    db.query(sql)
    .then((resultados) => {
        res.status(200).send(resultados);
    })
    .catch((error) => {
        console.error("Error al obtener los productos", error);
        res.status(500).send('Error al obtener los productos');
    });
});



module.exports = router;