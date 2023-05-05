import axios from 'axios';
import type { Product } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // TODO: add it in env variables
  withCredentials: true,
});

const getAll = async (): Promise<Product[]> => {
  const { data } = await instance.get<Product[]>('/products');
  return data;
};

export default { getAll };
