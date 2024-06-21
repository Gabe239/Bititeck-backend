import AuthService from '../services/auth.service.js';


export async function signup(req, res) {
    try {
        const newUser = await AuthService.signup(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function login(req, res) {
    try {
        const { user, token } = await AuthService.login(req.body);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

