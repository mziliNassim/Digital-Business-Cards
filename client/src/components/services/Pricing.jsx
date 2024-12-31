import React from "react";
import { motion } from "motion/react";

const PricingCard = ({ id, title, price, features, isPopular }) => {
  return (
    <div className="hover:scale-105 transform transition-transform duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 + 0.25 * id }}
        className={`p-6 rounded-2xl h-full flex flex-col justify-between shadow-xl ${
          isPopular ? "bg-[#f35a57] text-white" : "bg-white dark:bg-gray-800"
        }`}
      >
        <div>
          <h3
            className={`text-xl font-bold ${
              isPopular ? "text-white" : "text-gray-800 dark:text-white"
            }`}
          >
            {title}
          </h3>

          <div className="mt-4">
            <span
              className={`text-4xl font-bold ${
                isPopular ? "text-white" : "text-gray-800 dark:text-white"
              }`}
            >
              ${price}
            </span>
            <span
              className={`ml-1 ${
                isPopular ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              /month
            </span>
          </div>

          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <i
                  className={`bi bi-check-lg mr-2 h-5 w-5 text-[#f35a57] ${
                    isPopular && "text-gray-50"
                  }`}
                ></i>

                <span
                  className={
                    isPopular
                      ? "text-blue-100"
                      : "text-gray-600 dark:text-gray-300"
                  }
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          className={`w-full mt-8 py-3 px-6 rounded-xl font-medium transition-colors duration-200 ${
            isPopular
              ? "bg-white text-[#f35a] hover:bg-gray-100"
              : "bg-[#f35a57] text-white hover:bg-[#f35a] dark:hover:bg-[#f35a]"
          }`}
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: "9",
      features: [
        "1 Digital Business Card",
        "Basic Templates",
        "Contact Information",
        "Social Media Links",
        "QR Code Sharing",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: "29",
      features: [
        "5 Digital Business Cards",
        "Premium Templates",
        "Custom Branding",
        "Analytics Dashboard",
        "Lead Generation Tools",
        "Priority Support",
      ],
      isPopular: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "99",
      features: [
        "Unlimited Cards",
        "Custom Design Service",
        "Team Management",
        "API Access",
        "White-label Solution",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex flex-col lg:gap-8  max-w-screen-xl mx-auto w-full xl:gap-0 pt-20 pb-8 lg:py-16 px-4  lg:pt-28">
        <div className="mt-10 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-4xl font-bold text-[#f35a57] mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
