import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { forgotPasswordDB } from "../../utils/handleAuthDB";

// import { Loader } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("nassimmzili9@gmail.com");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", state: "" });

  const forgotPasswordUI = async () => {
    await forgotPasswordDB(email)
      .then((res) => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        setAlert({ message: err.message, state: "danger" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    forgotPasswordUI();
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
              Forgot Password
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>

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

                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="bi bi-envelope text-lg text-[#f35a57]"></i>
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 outline-none bg-gray-200 dark:bg-gray-800 bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-[#f35a57] focus:ring-2 focus:ring-[#f35a57] text-gray-900 dark:text-gray-50 placeholder-gray-600 dark:placeholder-gray-400 transition duration-200"
                  />
                </div>

                <motion.button
                  disabled={isLoading}
                  // onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-[#f35a57] text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:ring-offset-2 transition duration-200"
                  type="submit"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </motion.button>
              </form>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-16 h-16 bg-[#f35a57] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <i className="bi bi-envelope text-3xl font-bold text-gray-50"></i>
                </motion.div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  If an account exists for {email}, you will receive a password
                  reset link shortly.
                </p>
              </div>
            )}
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
export default ForgotPassword;
