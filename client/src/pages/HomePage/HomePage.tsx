import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import productService from '../../services/productService';
import { setProducts } from '../../reducers/productReducer';
import { Link } from 'react-router-dom';

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
      {products.length > 0 && (
        <div className=" bg-neutral-white w-screen flex flex-row justify-center">
          <main className="flex gap-x-8 gap-y-5 justify-center flex-wrap max-w-screen-xl mt-6">
            {products.map((product) => (
              <Link
                className="group"
                key={product.id}
                to={`/ProductPage/${product.id}`}
              >
                <figure className="w-60">
                  <img
                    className="border-4 border-neutral-gray w-full h-52"
                    src={product.image}
                  />
                  <div className="flex flex-col justify-between bg-neutral-gray h-36">
                    <figcaption className="group-hover:underline ml-1">
                      {shortenString(product.name)}
                    </figcaption>
                    <p className="group-hover:underline ml-1 mb-1">
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
