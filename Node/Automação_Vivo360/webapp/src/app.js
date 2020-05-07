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

var CronJob = require('cron').CronJob;
var job = new CronJob('*/10 * * * * *', function() {
    console.log('You will see this message every 10 second');
});
job.start();

export default app;