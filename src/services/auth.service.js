import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/user.repository.js';
import config from '../config/env-config.js';

class AuthService {
    async signup(userData) {
        const { email, password } = userData;

        const existingUser = await UserRepository.findUserByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserRepository.createUser({ ...userData, password: hashedPassword });
        return newUser;
    }

    async login({ email, password }) {
        const user = await UserRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign(
            {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            },
            config.jwt_secret,
            { expiresIn: '1h' }
        );

        return { user, token };
    }
}

export default new AuthService();
