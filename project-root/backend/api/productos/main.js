const router = require('express').Router();


router.post('/', (req, res) => {
    const {nombre, categoria, precio, imagen, stock} = req.body;

    let sql = "INSERT INTO productos (nombre, categoria, precio, imagen, stock) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [nombre, categoria, precio, imagen, stock])
    .then(([productos]) => {
        res.status(201).send('Producto creado');
    })
    .catch(error => {
        console.error("Error al crear el producto", error);
        res.status(500).json({ mensaje: 'Error al crear el producto' });
    });
});

module.exports = router;