import * as dotenv from 'dotenv';

dotenv.config();

export default {
  severPort: Number(process.env.PORT) ?? '',
  mongoUrl: process.env.MONGO_URL ?? '',
  nodeEnv: process.env.NODE_ENV ?? '',
};

// declare global {
//   namespace NodeJS {
//     interface ProcessEnv {
//       severPort: number;
//       mongoUrl: string;
//       nodeEnv: string;
//     }
//   }
// }
