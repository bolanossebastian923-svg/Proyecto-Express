const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[LOG] Método: ${req.method} | Ruta solicitada: ${req.url}`);
    next(); 
});

app.get('/inicio', (req, res) => {
    res.json({ "mensaje de bienvenida": "Bienvenido a mi aplicación de API" });
});

app.get('/informacion', (req, res) => {
    res.json({
        "nombre": "Aplicación de Software",
        "descripcion": "Es una aplicación que busca pruebas para entender el funcionamiento de rutas",
        "autor": "Desarrolladores de backend y frontend"
    });
});


app.post('/solicitudes', (req, res) => {
    const { nombre, apellido, correo } = req.body;

    if (!nombre || !apellido || !correo) {
        return res.status(400).json({
            error: "Datos incompletos",
            mensaje: "Los campos 'nombre', 'apellido' y 'correo' son obligatorios."
        });
    }

    return res.status(201).json({
        estado: "Éxito",
        mensaje: "¡La solicitud fue recibida correctamente!",
        datosRecibidos: {
            nombre,
            apellido,
            correo
        }
    });
});

app.listen(PORT, () => {
    console.log('Servidor ejecutándose correctamente');
});