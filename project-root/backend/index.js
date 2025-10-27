require('dotenv').config();
const express = require('express');

const path = require('path');
const app = express();
const puerto = process.env.PUERTO;

const apiRouter = require('./api/mainapi');

app.use(express.json());

app.use('/api', apiRouter);


const dirArchivos = path.join(__dirname, "archivos");
app.use('/archivos', express.static(dirArchivos));


app.listen(puerto, function(error) {
    if (error) {
        console.error("Error al iniciar el servidor", error);
        process.exit(1);
    }
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});