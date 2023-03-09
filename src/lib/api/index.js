import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: { "Content-Type": "application/json" },
});

export const postUserIdCheck = async (userId) => {
  const res = await instance.post("/accounts/signup/valid/username/", userId);

  return res.data;
};
