const router = require('express').Router();
const productosRouter = require('./productos/mainproducto');
const usuariosRouter = require('./usuarios/mainuser');

router.use('/usuarios', usuariosRouter);
router.use('/productos', productosRouter);

module.exports = router;