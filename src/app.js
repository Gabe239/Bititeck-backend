import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import config from './config/env-config.js';
import { connectToDatabase } from './config/mongoose-config.js';

dotenv.config();

const app = express();

connectToDatabase();
const port = config.port || 8080;

//routes
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';
import eventRouter from './routes/event.router.js';
import ticketRouter from './routes/ticket.router.js';
import sectorRouter from './routes/sector.router.js';

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/event', eventRouter);
app.use('/api/ticket', ticketRouter);
app.use('/api/sector', sectorRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
