import { configureStore, createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  username: string;
}

const initialState:UserState = {
  username: ''
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState):string => state.user.username;

export default store;
