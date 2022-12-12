import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import absencesRouter from './routes/absencesRouter.js';

const app = express();

// Configuring the app
app.use(cors());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true} )
);

// Setup routes
app.use('/api/absences', absencesRouter);

app.listen(5000, () => console.log('App listening on port 5000!'));