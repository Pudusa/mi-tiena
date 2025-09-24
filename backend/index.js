// 1. Importar las herramientas que necesitamos
const express = require('express');
const cors = require('cors');

// 2. Crear nuestra aplicación de Express
const app = express();
const PORT = 3001; // El "puerto" donde nuestro servidor escuchará

// 3. Configuraciones iniciales
app.use(cors()); // Permitir que nuestro frontend se conecte

// 4. Definir una ruta de prueba
// Cuando alguien visite la dirección principal, le enviaremos un mensaje
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de mi tienda!');
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});