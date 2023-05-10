import axios from 'axios';
import type { Product } from '../types';
import { SERVER_URL } from '../config';

const instance = axios.create({
  baseURL: `${SERVER_URL}/api`, // TODO: add it in env variables
  withCredentials: true,
});

const getAll = async (): Promise<Product[]> => {
  const { data } = await instance.get<Product[]>('/products');
  return data;
};

export default { getAll };
