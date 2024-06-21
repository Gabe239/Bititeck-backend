import UserRepository from '../repositories/user.repository.js';

class UserService {
    async createUser(userData) {
        return await UserRepository.createUser(userData);
    }

    async getUserById(id) {
        return await UserRepository.getUserById(id);
    }

    async getUserByEmail(email) {
        return await UserRepository.getUserByEmail(email);
    }

    async updateUser(id, updateData) {
        return await UserRepository.updateUser(id, updateData);
    }

    async deleteUser(id) {
        return await UserRepository.deleteUser(id);
    }

    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }
}

export default new UserService();
