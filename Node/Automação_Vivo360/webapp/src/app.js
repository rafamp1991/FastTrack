import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

require("./scheduler.js");
export default app;