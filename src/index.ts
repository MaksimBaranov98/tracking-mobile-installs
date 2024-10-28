import { config } from './config';
import express from 'express';
import path from 'path';
import serverRoutes from './routes/servers';

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));

app.use(serverRoutes);

app.listen(config.SERVER_PORT, () => console.log(`Server has been started on port ${config.SERVER_PORT}`));
