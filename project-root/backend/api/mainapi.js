const router = require('express').Router();
const productosRouter = require('./productos/mainproducto');
const usuariosRouter = require('./usuarios/mainuser');
const carritoRouter =  require('./carrito/maincarrito');

router.use('/usuarios', usuariosRouter);
router.use('/productos', productosRouter);
router.use('/carrito', carritoRouter);

module.exports = router;