import { config } from './config';
import express from 'express';

const app = express();

const startCallback = () => console.log(`Server has been started on port ${config.PORT}`);

app.listen(config.PORT, startCallback);
