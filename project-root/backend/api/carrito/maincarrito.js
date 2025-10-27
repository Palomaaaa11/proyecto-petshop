const router = require('express').Router();
const db = require('../../conexiondb');
const verificarToken = require('../verificarToken')


router.post('/',verificarToken, function (req, res, next) {
    const { carrito } = req.body;
    const id_usuario = req.usuario.id_usuario;

    if(!carrito || carrito.length === 0) {
        return res.status(400).send('El carrito esta vacio');
    }

    const procesarItem = (item) => {
        let productoInfo;
        return db.query("SELECT precio, stock FROM productos WHERE id_producto = ?", [item.id_producto])
        .then(([productos]) => {
            if (productos.length === 0) {
                throw new Error(`Producto con ID ${item.id_producto} no encontrado`);
            }

            productoInfo = productos[0];
            if (productoInfo.stock < item.cantidad) {
                throw new Error(`Stock insuficiente para el producto con ID ${item.id_producto}`);
            }

            const precio_unitario = productoInfo.precio;
            const precio_total = precio_unitario * item.cantidad;

            return db.query(
                "INSERT INTO ventas (id_usuario, id_producto, cantidad, precio_unitario, precio_total) VALUES (?, ?, ?, ?, ?)",
                [id_usuario, item.id_producto, item.cantidad, precio_unitario, precio_total]
            );
        })
        .then(() => {
            return db.query(
            "UPDATE productos SET stock = stock - ? WHERE id_producto = ?",
            [item.cantidad, item.id_producto]
        );
    });
};

    const promesas = carrito.map(item => procesarItem(item));
    Promise.all(promesas)
    .then(() => {
        res.status(201).json({ mensaje: 'Compra realizada exitosamente' });
    })
    .catch((error) => {
        console.error("Error al realizar la compra", error);
        res.status(500).json({ mensaje: 'Error al procesar la compra', error: error.message });
    });
        
});

module.exports = router;