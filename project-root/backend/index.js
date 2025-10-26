
const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PUERTO;

const apiRouter = require('./api/mainapi');

app.use(express.json());

app.use('/api', apiRouter);





app.listen(puerto, function(error) {
    if (error) {
        console.error("Error al iniciar el servidor", error);
        process.exit(1);
    }
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});