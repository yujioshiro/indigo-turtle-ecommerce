import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import productService from '../../services/productService';
import { setProducts } from '../../reducers/productReducer';
import { Link } from 'react-router-dom';

const productz = [
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
  {
    name: 'Ipgone 10',
    description: 'desc',
    price: '999.99',
    quantity: '10',
    userId: 100,
    image: 'https://picsum.photos/200/300',
    createdAt: '',
    updatedAt: '',
    id: 1,
  },
];

const shortenString = (text: string): string => {
  if (text.length > 103) return text.slice(0, 101).concat('...');
  return text;
};

export default function HomePage(): JSX.Element {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeProduct = async (): Promise<void> => {
      const products = await productService.getAll();
      dispatch(setProducts(products));
    };
    initializeProduct().catch((err) => {
      console.log(err);
    });
  }, [dispatch]);

  return (
    <>
      {productz.length > 0 && (
        <div className=" flex w-screen flex-row justify-center bg-neutral-white">
          <main className="mt-6 flex max-w-screen-xl flex-wrap justify-center gap-x-8 gap-y-5">
            {productz.map((product) => (
              <Link
                className="group"
                key={product.id}
                to={`/ProductPage/${product.id}`}
              >
                <figure className="w-60">
                  <img
                    className="h-52 w-full border-4 border-neutral-gray"
                    src={product.image}
                  />
                  <div className="flex h-36 flex-col justify-between bg-neutral-gray">
                    <figcaption className="ml-2 group-hover:underline">
                      {shortenString(product.name)}
                    </figcaption>
                    <p className="mb-1 ml-2 group-hover:underline">
                      ${product.price}
                    </p>
                  </div>
                </figure>
              </Link>
            ))}
          </main>
        </div>
      )}
    </>
  );
}
