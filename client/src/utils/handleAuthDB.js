import axios from "axios";

axios.defaults.withCredentials = true;

const AUTH_API = "http://localhost:5000/api/auth";
// const AUTH_API = "https://digital-business-cards-app.netlify.app/api/auth";

const defaultResponse = {
  user: null,
  message: "Server Error !",
  state: "danger",
};

const options = {
  headers: {
    "Content-Type": "application/json",
  },
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

export const verifyEmailDB = async (code) => {
  try {
    const res = await axios.post(`${AUTH_API}/verify-email`, { code });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const resendVerificationCodeDB = async (email) => {
  try {
    const res = await axios.post(`${AUTH_API}/resent-verfy-Code`, { email });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const forgotPasswordDB = async (email) => {
  try {
    const res = await axios.post(`${AUTH_API}/forgot-password`, { email });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const resetPasswordDB = async (token, password) => {
  try {
    const res = await axios.post(
      `${AUTH_API}/reset-password/${token}`,
      {
        password,
      },
      options
    );
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
