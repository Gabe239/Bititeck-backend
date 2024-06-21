import userModel from '../models/user.model.js';

class UserRepository {
    async createUser(userData) {
        try {
            const user = new userModel(userData);
            return await user.save();
        } catch (error) {
            throw new Error(`Unable to create user: ${error.message}`);
        }
    }

    async findUserByEmail(email) {
        try {
            return await userModel.findOne({ email });
        } catch (error) {
            throw new Error(`Unable to find user: ${error.message}`);
        }
    }

    async getUserById(id) {
        try {
            return await userModel.findById(id).exec();
        } catch (error) {
            throw new Error(`Unable to find user by ID: ${error.message}`);
        }
    }

    async getUserByEmail(email) {
        try {
            return await userModel.findOne({ email }).exec();
        } catch (error) {
            throw new Error(`Unable to find user by email: ${error.message}`);
        }
    }

    async updateUser(id, updateData) {
        try {
            return await userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        } catch (error) {
            throw new Error(`Unable to update user: ${error.message}`);
        }
    }

    async deleteUser(id) {
        try {
            return await userModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Unable to delete user: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            return await userModel.find().exec();
        } catch (error) {
            throw new Error(`Unable to retrieve users: ${error.message}`);
        }
    }

    
}

export default new UserRepository();
