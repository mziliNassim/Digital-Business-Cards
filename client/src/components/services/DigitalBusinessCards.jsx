import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import "bootstrap-icons/font/bootstrap-icons.css";

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="absolute top-4 right-4">
        <button
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg focus:outline-none"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <i className="bi bi-sun-fill text-yellow-400"></i>
          ) : (
            <i className="bi bi-moon-fill text-gray-800"></i>
          )}
        </button>
      </div>

      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Digital Business Cards
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Seamlessly manage and share your professional information with
          customizable digital business cards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Example */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
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
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
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
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DigitalBusinessCards;
