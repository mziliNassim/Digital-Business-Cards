import axios from "axios";

axios.defaults.withCredentials = true;

const AUTH_API = "http://localhost:3001/api/auth";

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
    return res.data;
  } catch (err) {
    console.error("Authentication Login failed:", err.message);
    return { user: null, message: err.message, state: "danger" };
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

export const registerAuth = async (user) => {
  try {
    const res = await axios.post(`${AUTH_API}/register`, user);
    return res.data;
  } catch (err) {
    return { user: null, message: err.message, state: "danger" };
  }
};
