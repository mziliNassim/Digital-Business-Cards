import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
// import { useAuthStore } from "../store/authStore";
// import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const [alert, setAlert] = useState({ message: "", state: "" });
  const [loading, setLoading] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState();

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

  const verifyEmailUI = async (verificationCode) => {
    try {
      // await verifyEmail(verificationCode);
      // navigate("/");
      //     toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    verifyEmailUI(verifyEmail);
  };

  // // Auto submit when all fields are filled
  // useEffect(() => {
  //   if (code.every((digit) => digit !== "")) {
  //     handleSubmit(new Event("submit"));
  //   }
  // }, [code]);

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
            {alert.message && (
              <p className="text-red-500 font-semibold mt-2">{alert.message}</p>
            )}
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
