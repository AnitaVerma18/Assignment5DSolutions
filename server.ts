import express from 'express';
import http from 'http';
import cors from 'cors';
import user from './src/modules/auth/auth.routes';
import upload from './src/modules/upload/upload.routes';
import moments from './src/modules/moment/moment.routes';
import { dbConnect } from './src/config/db';
import { config } from 'dotenv';
import path from 'path';
config();
const { PORT } = process.env;

(async () => {
    const app = express();
    app.use(express.json());
    app.use(cors({ origin: "*" }));
    app.use('/uploads', express.static(path.join(__dirname, 'src/modules/upload/uploads'))); // serve static files (like images) from the folder
    app.use('/user', user);
    app.use('/upload', upload);
    app.use('/moments', moments)
    await dbConnect();
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})();


