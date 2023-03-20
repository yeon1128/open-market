import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface RegisterState {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}
const initialState: RegisterState = {
  username: "cjf",
  password: "123",
  password2: "123",
  phone_number: "1111-111",
  name: "dfssdf",
};
const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    resetAll: () => initialState,
    resetName: (state) => {
      state.username = "";
    },
  },
});

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
  },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//hooks.ts
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
