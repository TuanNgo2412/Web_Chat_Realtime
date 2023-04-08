import * as dotenv from 'dotenv';

dotenv.config();

export default {
    severPort: Number(process.env.PORT) ?? '',
    mongoUrl: process.env.MONGO_URL ?? '',
    nodeEnv: process.env.NODE_ENV ?? '',
    JWT_SECRET: process.env.JWT_SECRET ?? '',
    JWT_EXPIRE: process.env.JWT_EXPIRE ?? '',
    JWT_REFRESH_SECRET: process.env.JWT_SECRET ?? '',
    JWT_REFRESH_EXPIRE: process.env.JWT_EXPIRE ?? '',
};
