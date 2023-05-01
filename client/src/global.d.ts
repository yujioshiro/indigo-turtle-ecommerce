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

type Product = {
  name: string;
  description: string | null;
  price: Decimal;
  quantity: number;
  userId: number | null;
  image: string | null;
  id: number;
};

type LogoLink = {
  image: JSX.Element;
  path: string;
};

type WebsiteLink = {
  name: string;
  path: string;
}

type ProductPageLink = {
  name: string;
  path: string;
};

type AboutPageLink = {
  name: string;
  path: string;
};

type CheckoutPageLink = {
  icon: ReactNode;
  path: string;
};

type AuthPageLink = {
  user: string;
  path: string;
};

type Contact = {
  img: string;
  title: string;
  price: number;
}