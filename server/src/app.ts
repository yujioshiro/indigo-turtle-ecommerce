import express from 'express';
import registrationRoute from './routes/registrationRoute';
import productsRoute from './routes/productsRouter';

const app = express();

app.use(express.json());

//routes
app.use('/api/register', registrationRoute);
app.use('/api/products/', productsRoute);

export default app;
