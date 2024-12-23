import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPasswordDB } from "../../utils/handleAuthDB";

// import { useAuthStore } from "../store/authStore";
// import Input from "../components/Input";
// import { Lock } from "lucide-react";
// import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", state: "" });

  const [hidPassword, setHidPassword] = useState(true);
  const [hidPasswordConfirm, setHidPasswordConfirm] = useState(true);

  const { token } = useParams();
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    console.log("ResetPassword ~ token:", token, typeof token);
    console.log("resetPassword ~ password:", password, typeof password);
    await resetPasswordDB(token, password)
      .then((res) => {
        setAlert({ message: res.message, state: res.state });
      })
      .catch((err) => {
        setAlert({ message: err.message, state: "danger" });
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match", state: "warning" });
      setIsLoading(false);
      return;
    }
    resetPassword();
  };

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-[#f35a57] text-transparent bg-clip-text">
              Reset Password
            </h2>

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

                <div className="ms-3 text-sm font-medium">{alert.message}</div>

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

            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i class="bi bi-person-lock text-lg text-[#f35a57]"></i>
                </div>
                <input
                  type={hidPassword ? "password" : "text"}
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 outline-none bg-gray-200 dark:bg-gray-800 bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-[#f35a57] focus:ring-2 focus:ring-[#f35a57] text-gray-900 dark:text-gray-50 placeholder-gray-600 dark:placeholder-gray-400 transition duration-200"
                />

                <div
                  onClick={() => setHidPassword(!hidPassword)}
                  className="absolute inset-y-0 right-5 flex items-center pl-3 cursor-pointer"
                >
                  {hidPassword ? (
                    <i class="bi bi-eye text-lg text-gray-500"></i>
                  ) : (
                    <i class="bi bi-eye-slash text-lg text-gray-500"></i>
                  )}
                </div>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i class="bi bi-person-lock text-lg text-[#f35a57]"></i>
                </div>
                <input
                  type={hidPasswordConfirm ? "password" : "text"}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 outline-none bg-gray-200 dark:bg-gray-800 bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-[#f35a57] focus:ring-2 focus:ring-[#f35a57] text-gray-900 dark:text-gray-50 placeholder-gray-600 dark:placeholder-gray-400 transition duration-200"
                />
                <div
                  onClick={() => setHidPasswordConfirm(!hidPasswordConfirm)}
                  className="absolute inset-y-0 right-5 flex items-center pl-3 cursor-pointer"
                >
                  {hidPasswordConfirm ? (
                    <i class="bi bi-eye text-lg text-gray-500"></i>
                  ) : (
                    <i class="bi bi-eye-slash text-lg text-gray-500"></i>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-[#f35a57] text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring--[#f35a57] focus:ring-offset-2 transition duration-200"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Set New Password"}
              </motion.button>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-300 dark:bg-gray-900 bg-opacity-50 flex justify-center">
            <Link
              to={"/auth/login"}
              className="text-sm text-blue-400 hover:underline flex items-center"
            >
              <i className="bi bi-arrow-left h-4 w-4 mr-2"></i>
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ResetPassword;
