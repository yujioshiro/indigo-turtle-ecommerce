import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, Dispatch } from '@reduxjs/toolkit';
import type { Product } from '../types';
import productService from '../services/productService';

const productInitialState: Product[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState: productInitialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;

export const initializeProducts = () => {
  return async (dispatch: Dispatch) => {
    const products = await productService.getAll();
    dispatch(setProducts(products));
  };
};
