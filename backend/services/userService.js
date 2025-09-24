const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();


async function createUser({ email, password }) {
    // 1. Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Crear el usuario en la base de datos
    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword, // Guardamos la contraseña hasheada
        },
    });

    return user;
}

module.exports = {
    createUser,
};