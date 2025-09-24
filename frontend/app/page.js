'use client';

import { useState, useEffect } from 'react';

export default function Home() {
    // 1. Creamos un "estado" para guardar el mensaje del backend
    const [message, setMessage] = useState('Cargando...');

    // 2. Usamos useEffect para que el código se ejecute cuando la página cargue
    useEffect(() => {
        // 3. Hacemos la petición a nuestro backend
        fetch(process.env.NEXT_PUBLIC_API_URL)
            .then(response => response.text()) // Convertimos la respuesta a texto
            .then(data => setMessage(data)); // Actualizamos el mensaje con los datos recibidos
    }, []); // El array vacío asegura que esto solo se ejecute una vez

    // 4. Mostramos el mensaje en la página
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">{message}</h1>
        </main>
    );
}