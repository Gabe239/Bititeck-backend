import dotenv from 'dotenv';

dotenv.config();

export default {
    mongoUrl: process.env.MONGO_URL,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    stripe_secret: process.env.STRIPE_SECRET_KEY
}