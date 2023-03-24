import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface RegisterPostData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
  checkbox: boolean;
}
interface RegisterState {
  registerStatus: string;
  error: string;
  userType: string;
  nameStatus: string;
  nameMessage: string;
}
const initialState: RegisterState = {
  registerStatus: "idle",
  error: "",
  userType: "BUYER",
  nameStatus: "idle",
  nameMessage: "",
};

// 회원가입
export const axiosPostRegister = createAsyncThunk(
  "register/axiosPostJoinBuyer",
  async (
    {
      userType,
      userData,
    }: {
      userType: string;
      userData: RegisterPostData;
    },
    { rejectWithValue }
  ) => {
    const url = `${process.env.REACT_APP_API_KEY}/accounts/signup/`;
    try {
      const data = userData;
      const res = await axios.post(url, data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// slice 생성
export const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    resetAll: () => initialState,
    resetName: (state) => {
      state.nameStatus = "idle";
      state.nameMessage = "";
    },
    resetRegister: (state) => {
      state.registerStatus = "idle";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosPostRegister.pending, (state) => {
      state.registerStatus = "loading";
    });
    builder.addCase(axiosPostRegister.fulfilled, (state) => {
      state.registerStatus = "succeeded";
    });
    builder.addCase(axiosPostRegister.rejected, (state, action) => {
      state.registerStatus = "failed";
      if (action.payload) {
        state.error = Object.values(action.payload as any)
          .map((message: any) => message.join().toString())
          .join("\n");
      } else {
        state.error =
          action.error.message || "Something is wrong in Register:<";
      }
    });
  },
});

export const getNameStatus = (state: RootState) => state.register.nameStatus;
export const getNameMessage = (state: RootState) => state.register.nameMessage;
export const getRegisterStatus = (state: RootState) =>
  state.register.registerStatus;
export const getRegisterError = (state: RootState) => state.register.error;
export const getJoinUserType = (state: RootState) => state.register.userType;
export const { resetName, resetRegister, resetAll } = registerSlice.actions;
export default registerSlice.reducer;
