const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(
        `[${new Date().toLocaleString()}] Método: ${req.method} | Ruta: ${req.path}`
    );

    next();
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Carlos' },
        { id: 2, nombre: 'María' }
    ]);
});

app.post('/usuarios', (req, res) => {
    res.status(201).json({
        mensaje: 'Usuario recibido correctamente',
        datos: req.body
    });
});

app.listen(PORT, () => {
    console.log('servidor ejecutándose correctamente');
});