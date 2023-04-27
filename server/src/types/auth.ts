import { Request } from 'express';

export interface User {
  username: string;
  email: string;
  password: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface AuthedRequest extends Request {
  user: User;
}
