const router = require('express').Router();
const productosRouter = require('./productos/mainproducto');
const usuariosRouter = require('./usuarios/mainuser');
const carritoRouter =  require('./carrito/maincarrito');

const verificarToken = require('./verificarToken');

router.use('/usuarios', usuariosRouter);
router.use('/productos', verificarToken, productosRouter);
router.use('/carrito', verificarToken, carritoRouter);

module.exports = router;