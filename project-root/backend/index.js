

const express = require('express');
require('dotenv').config();
const app = express();
const puerto = process.env.PUERTO;

app.use(express.json());

app.listen(puerto, function(error) {
    if (error) {
        console.error("Error al iniciar el servidor", error);
        process.exit(1);
    }
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});