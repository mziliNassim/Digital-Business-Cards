import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const DigitalBusinessCards = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex flex-col lg:gap-8 max-w-screen-xl mx-auto w-full xl:gap-0 pt-20 pb-8 lg:py-16 px-4  lg:pt-28">
        <div className="my-10 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-4xl font-bold text-[#f35a57] mb-4"
          >
            Digital Business Cards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Seamlessly manage and share your professional information with
            customizable digital business cards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Example */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="shadow-md hover:shadow-lg bg-gray-50 dark:bg-gray-800 p-5  rounded transition-all duration-300"
          >
            <div className="text-center">
              <i className="bi bi-person-circle text-5xl text-[#f35a57] mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Professional
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Perfect for individual professionals.
              </p>
              <button className="w-full py-2 bg-[#f35a57] text-white rounded hover:bg-[#d2494b]">
                Get Started
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="shadow-md hover:shadow-lg bg-gray-50 dark:bg-gray-800 p-5  rounded transition-all duration-300"
          >
            <div className="text-center">
              <i className="bi bi-people text-5xl text-[#f35a57] mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Team
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Great for small teams or startups.
              </p>
              <button className="w-full py-2 bg-[#f35a57] text-white rounded hover:bg-[#d2494b]">
                Get Started
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="shadow-md hover:shadow-lg bg-gray-50 dark:bg-gray-800 p-5  rounded transition-all duration-300"
          >
            <div className="text-center">
              <i className="bi bi-building text-5xl text-[#f35a57] mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Enterprise
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tailored solutions for large organizations.
              </p>
              <button className="w-full py-2 bg-[#f35a57] text-white rounded hover:bg-[#d2494b]">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBusinessCards;
