const userService = require('../services/userService');

async function registerUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const newUser = await userService.createUser({ email, password });
        // Por seguridad, no devolvemos la contraseña hasheada
        const userResponse = {
            id: newUser.id,
            email: newUser.email,
            createdAt: newUser.createdAt
        };
        res.status(201).json(userResponse);
    } catch (error) {
        // Manejar el caso de email duplicado
        if (error.code === 'P2002') {
            return res.status(409).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

module.exports = {
    registerUser,
};