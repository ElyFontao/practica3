import express from 'express';

const serverRuta = express();
const PORT = 3000;


//ruta GET CON PARAMETRO DE RUTA
// Solicitud: http://localhost:3000/user/123

serverRuta.get('/user/:id', (req,res) =>{
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId} `);
    res.send(`Perfil del usuario con ID: ${userId}`);
});


serverRuta.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});