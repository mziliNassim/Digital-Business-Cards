import React from "react";

const PricingCard = ({ title, price, features, isPopular }) => (
  <div
    className={`p-6 rounded-2xl flex flex-col justify-between shadow-xl transform hover:scale-105 transition-transform duration-300 ${
      isPopular ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800"
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
              class={`bi bi-check-lg mr-2 h-5 w-5 ${
                isPopular ? "text-blue-100" : "text-blue-500"
              }`}
            ></i>

            <span
              className={
                isPopular ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
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
          ? "bg-white text-blue-600 hover:bg-blue-50"
          : "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500"
      }`}
    >
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
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
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your business needs
          </p>
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
