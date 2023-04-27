import express from 'express';
import registrationRoute from './routes/registrationRoute';
import loginRoute from './routes/loginRoute';

const app = express();

app.use(express.json());

//routes
app.use('/api/register', registrationRoute);

app.use('/api/login', loginRoute);

export default app;
