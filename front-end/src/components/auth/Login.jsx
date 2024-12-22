import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

import Alert from "../Alert.jsx";
import { Link, useNavigate } from "react-router-dom";
import authlogin from "../../img/auth/authlogin.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../utils/handleAuthDB.js";
import { setUser } from "../../features/userSlice.js";

import axios from "axios";
axios.defaults.withCredentials = true;

const Login = () => {
  const [hidPassword, setHidPassword] = useState(true);
  const [alert, setAlert] = useState({ message: "", state: "" });
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "admin@gmail.com",
    password: "admin",
    remember: false,
  });

  // ======================
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user) {
      if (user.user.isVerified) navigate("/");
      else navigate("/auth/verify-email");
    }
  });

  // ======================
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, mainControls]);

  // ======================

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "remember") {
      setLoginData({ ...loginData, remember: !loginData.remember });
      return;
    }
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async () => {
    await loginAuth(loginData)
      .then((res) => {
        if (res.user) {
          dispatch(setUser(res.user));
          window.location = "/"; // <==> navigate("/");
        }
        setAlert({ message: res.message, state: res.state });
      })
      .catch((err) => {
        setAlert({
          message: err.message || "An unexpected error occurred.",
          state: "danger",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login();
  };

  // ======================

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div
            ref={ref}
            className="grid md:grid-cols-2 items-center gap-16 max-w-6xl w-full"
          >
            <div className="">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1 }}
                src={authlogin}
                className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                alt="Dining Experience"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Top section */}
                <div className="mb-8">
                  <h3 className="text-gray-800 dark:text-gray-200 text-3xl font-extrabold">
                    Sign in
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 leading-relaxed">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                {alert.message !== "" && (
                  <div
                    id="alert-1"
                    class={`flex items-center justify-between p-4 mb-4  rounded-lg ${
                      alert.state === "success"
                        ? "text-green-800 dark:text-green-400 bg-green-50 "
                        : alert.state === "warning"
                        ? "text-yellow-800 dark:text-yellow-400 bg-yellow-50 "
                        : "text-red-800 dark:text-red-400 bg-red-50 "
                    }  dark:bg-gray-800 `}
                    role="alert"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>

                    <span className="sr-only">Info</span>

                    <div className="ms-3 text-sm font-medium">
                      {alert.message}
                    </div>

                    <button
                      onClick={() => setAlert({ message: "", state: "" })}
                      type="button"
                      class={`ms-auto transition-all rounded-lg focus:ring-2 dark:bg-gray-800 dark:hover:bg-gray-700  p-1.5 inline-flex items-center justify-center h-8 w-8 ${
                        alert.state === "success"
                          ? "focus:ring-green-400 dark:text-green-400 bg-green-100 text-green-500"
                          : alert.state === "warning"
                          ? "focus:ring-yellow-400 dark:text-yellow-400 bg-yellow-100 text-yellow-500"
                          : "focus:ring-red-400 dark:text-red-400 bg-red-100 text-red-500"
                      }  `}
                      data-dismiss-target="#alert-1"
                      aria-label="Close"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                {/* email */}
                <div>
                  <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#f35a57]"
                      placeholder="Enter user name"
                    />
                    <i className="bi bi-person-add absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer  text-gray-400"></i>
                  </div>
                </div>

                {/* password */}
                <div>
                  <label className="text-gray-800 dark:text-gray-200  text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={hidPassword ? "password" : "text"}
                      value={loginData.password}
                      onChange={handleChange}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#f35a57]"
                      placeholder="Enter password"
                    />
                    <div
                      onClick={() => setHidPassword(!hidPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      {hidPassword ? (
                        <i className="bi bi-eye text-gray-400"></i>
                      ) : (
                        <i className="bi bi-eye-slash text-gray-400"></i>
                      )}
                    </div>
                  </div>
                </div>

                {/* Remember && Forgot password */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember"
                      type="checkbox"
                      checked={loginData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm text-gray-800 dark:text-gray-200"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/auth/forgot-password"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                {/* submit */}
                <div className="!my-5">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#f35a57] opacity-90 hover:opacity-100 font-semibold hover:[#f35a57] focus:outline-none"
                  >
                    {loading ? (
                      <div role="state">
                        <svg
                          aria-hidden="true"
                          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Log in"
                    )}
                  </button>
                </div>

                <hr className="" />

                {/* google */}
                <button
                  type="button"
                  className="w-full my-8 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>

                {/* redirict register */}
                <p className="text-sm !mt-8 text-center text-gray-800 dark:text-gray-200">
                  Don't have an account{" "}
                  <Link
                    to="/auth/register"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
