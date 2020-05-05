import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

export default app;