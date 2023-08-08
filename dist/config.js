import { config } from 'dotenv';
config();
export const PORT = process.env.PORT || 4000;

// export const MONGODB_URI = "mongodb://0.0.0.0:27017/react-mongo-auth-crud";
export const MONGODB_URI = process.env.MONGODB_URI;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";
export const FRONTEND_URL = process.env.FRONTEND_URL || "https://frontend-react-auth-task.onrender.com";