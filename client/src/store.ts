import { configureStore, createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { Product } from './global';

export interface UserState {
  username: string;
}

const initialState:UserState = {
  username: ''
}

interface ProductSliceState {
  Products: Product[]
}

const productInititalState:ProductSliceState = {
  Products: []
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    auth: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.username = '';
    },
  },
});

export const { auth, logout } = userSlice.actions

const productSlice = createSlice({
  name: "Cart",
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
  }
})

export const { add, remove, clear } = productSlice.actions

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: productSlice.reducer,
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState):string => state.user.username;

export const selectCart = (state: RootState) => state.cart.Products;

export default store;
