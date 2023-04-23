import express from 'express';
import registrationRoute from './routes/registrationRoute';

const app = express();

app.use(express.json());

//routes
app.use('/api/register', registrationRoute);

export default app;
