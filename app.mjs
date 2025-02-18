import express from 'express';

//crear una instancia de Express

const app = express();

//configurar el puerto en el que el servidor escuchará

const PORT = 3000;

//ruta basica
app.get('/', (req, res) => {
        res.send('¡Hola, Mundo, es el tp 3 numero 3 :) !');

});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});5