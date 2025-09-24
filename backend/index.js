const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // <-- 1. Importar las rutas

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // <-- 2. Permitir que Express entienda JSON

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de mi tienda!');
});

// Usar las rutas de usuario
app.use('/api/users', userRoutes); // <-- 3. "Enchufar" las rutas de usuario

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});