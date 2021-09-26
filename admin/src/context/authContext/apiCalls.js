import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {

    // const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  dispatch(loginStart());
  try {
    const res = await axios.post("login", user);
    console.log(res.data)
    res.data.info.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};




