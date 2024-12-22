import axios from "axios";

axios.defaults.withCredentials = true;

const AUTH_API = "http://localhost:3001/api/auth";

const defaultResponse = {
  user: null,
  message: "Server Error !",
  state: "danger",
};

export const checkAuth = async () => {
  try {
    const res = await axios.get(`${AUTH_API}/check-auth`);
    return res.data;
  } catch (err) {
    console.error("Authentication check failed:", err);
    return { user: null, message: err.message, state: "danger" };
  }
};

export const loginAuth = async (user) => {
  try {
    const res = await axios.post(`${AUTH_API}/login`, user);
    return res?.data || defaultResponse;
  } catch (err) {
    return err?.response?.data || defaultResponse;
  }
};

export const registerAuth = async (user) => {
  try {
    const res = await axios.post(`${AUTH_API}/register`, user);
    return res?.data || defaultResponse;
  } catch (err) {
    console.log("registerAuth ~ err:", err);
    return err?.response?.data || defaultResponse;
  }
};

export const logoutAuth = async () => {
  try {
    const res = await axios.post(`${AUTH_API}/logout`);
    return res.data;
  } catch (err) {
    return { user: null, message: err.message, state: "danger" };
  }
};
