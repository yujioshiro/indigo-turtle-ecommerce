import { configureStore, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import type {PayloadAction} from '@reduxjs/toolkit';
import type { Product } from './global';
=======
import type { PayloadAction } from '@reduxjs/toolkit';
import { type Product } from './global';
>>>>>>> 1277bd02188cab318c7022e7f20bc16bc53c9a65

export interface UserState {
  id: string,
  username: string,
  email: string,
}

<<<<<<< HEAD
const initialState:UserState = {
  id: '',
  username: '',
  email: ''
}

=======
>>>>>>> 1277bd02188cab318c7022e7f20bc16bc53c9a65
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
      state.email = action.payload.email;
      state.id = action.payload.id;
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

<<<<<<< HEAD
export const selectUser = (state: RootState): UserState => state.user;

=======
>>>>>>> 1277bd02188cab318c7022e7f20bc16bc53c9a65
export const selectCart = (state: RootState): Product[] => state.cart.Products;

export default store;
