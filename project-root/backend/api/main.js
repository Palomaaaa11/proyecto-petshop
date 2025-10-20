const router = require('express').Router();
const productosRouter = require('./productos/main');
const usuariosRouter = require('./usuarios/main');

router.use('/usuarios', usuariosRouter);
router.use('/productos', productosRouter);

module.exports = router;