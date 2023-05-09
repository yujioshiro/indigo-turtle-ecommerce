import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Product } from './global';

export interface UserState {
  username: string;
}

interface ProductSliceState {
  Products: Product[];
}

type RootState = ReturnType<typeof store.getState>;

/* State */

const initialState: UserState = {
  username: '',
};

const productInititalState: ProductSliceState = {
  Products: [],
};

/* Slices */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.username = '';
    },
  },
});

export const { auth, logout } = userSlice.actions;

const productSlice = createSlice({
  name: 'Cart',
  initialState: productInititalState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.Products.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.Products.splice(action.payload, 1);
    },
    clear: (state) => {
      state.Products = [];
    },
  },
});

/* Exporting Actions */

export const { add, remove, clear } = productSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: productSlice.reducer,
  },
});

export const selectUser = (state: RootState): string => state.user.username;

export const selectCart = (state: RootState): Product[] => state.cart.Products;

export default store;
