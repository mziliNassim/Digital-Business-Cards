import { loginAuth } from "./handleAuthDB";

export const loginAuthUI = async (loginData) => {
  let alert = { message: "", state: "" };
  await loginAuth(loginData)
    .then((res) => {
      alert = { user: res.user, message: res.message, state: res.state };
      // if (res.user) {
      // dispatch(setUser(res.user));
      // } else
      //   alert = {
      //     message: "Invalid username or password",
      //     state: "warning",
      //   };
    })
    .catch((err) => {
      alert = {
        message: err.message,
        state: "danger",
      };
    });
  return alert;
};
