import app from './app';
import envConfig from './config/envConfig';

const { PORT } = envConfig;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(process.env.NODE_ENV);
});
