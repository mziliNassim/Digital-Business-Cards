import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  resendVerificationCodeDB,
  verifyEmailDB,
} from "../../utils/handleAuthDB";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";

const VerifyEmail = () => {
  const [alert, setAlert] = useState({ message: "", state: "" });
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [resendCode, setResendCode] = useState({
    timing: true,
    message: "Resend verification code?",
  });

  const handleChange = (index, value) => {
    const newCode = [...code];
    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // =================
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.user) navigate("/");
    else user.user?.isVerified && navigate("/");
  });

  // =================

  const resendVerificationCode = async () => {
    setResendCode({
      timing: false,
      message: "Resend verification code?",
    });
    await resendVerificationCodeDB(user.user.email)
      .then((res) => {
        setResendCode({
          timing: false,
          message: "Verification code send to youe email!",
        });
      })
      .catch((err) => {
        setAlert({ message: err.message, state: "danger" });
      })
      .finally(() => {
        setTimeout(() => {
          setResendCode({ timing: true, message: "Resend verification code?" });
        }, 3 * 60000); // 3 min
      });
  };

  // =================

  const verifyEmailUI = async (verificationCode) => {
    await verifyEmailDB(verificationCode)
      .then((res) => {
        if (res.user) {
          dispatch(setUser(res.user));
          window.location = "/";
        }
        setAlert({
          message: res.message,
          state: res.state,
        });
      })
      .catch((err) => {
        console.log("verifyEmailUI ~ err:", err);
        setAlert({ message: err.message, state: "danger" });
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const verificationCode = code.join("");
    verifyEmailUI(verificationCode);
  };

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#f35a57] to-[#f35a51] text-transparent bg-clip-text">
            Verify Your Email
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

          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            Enter the 6-digit code sent to your email address.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold bg-gray-300 dark:bg-gray-700 text-white border-2 border-gray-400 dark:border-gray-600 rounded-lg focus:border-[#f35a57] focus:outline-none"
                />
              ))}
            </div>

            {/* resendCodeTime */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm">
                <button
                  type="button"
                  disabled={!resendCode.timing}
                  onClick={resendVerificationCode}
                  className={
                    resendCode.timing
                      ? "text-blue-600 hover:underline font-semibold"
                      : "text-gray-600 font-semibold"
                  }
                >
                  {resendCode.message}
                </button>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  disabled={!resendCode.timing}
                  onClick={resendVerificationCode}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading || code.some((digit) => !digit)}
              className="w-full bg-[#f35a57] text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-[#f35a5F] focus:outline-none focus:ring-2 focus:ring-[#f35a57] focus:ring-opacity-50 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify Email"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default VerifyEmail;
