interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  address?: string;
}
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import '@prisma/client';
import { type } from 'os';
import { ReactNode } from 'react';
import { To } from 'react-router-dom';

type Product = {
  name: string;
  description: string | null;
  price: Decimal;
  quantity: number;
  userId: number | null;
  image: string | null;
  id: number;
};

type NavItemsProps = {
  name?: string | string[];
  icon?: ReactNode | ReactNode[];
  image?: JSX.Element;
  path: string;
};

type NavItems = {
  items: NavProps[]
}

type Contact = {
  img: string;
  title: string;
  price: number;
};
