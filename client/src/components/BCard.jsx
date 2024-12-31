import React, { useState } from "react";

const BCard = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [theme, setTheme] = useState("modern");

  const cardThemes = {
    modern: {
      cardClass: "bg-gradient-to-r from-blue-500 to-blue-700",
      textClass: "text-white",
    },
    minimal: {
      cardClass: "bg-white dark:bg-gray-800",
      textClass: "text-gray-900 dark:text-white",
    },
    professional: {
      cardClass: "bg-gray-900 dark:bg-gray-800",
      textClass: "text-white",
    },
  };

  const socialLinks = [
    { icon: "bi bi-linkedin", label: "LinkedIn" },
    { icon: "bi bi-twitter-x", label: "Twitter" },
    { icon: "bi bi-instagram", label: "Instagram" },
    { icon: "bi bi-globe", label: "Website" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Business Card Editor
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Customize your digital business card
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <i className="bi bi-save mr-2"></i>Save Changes
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <i className="bi bi-share mr-2"></i>Share Card
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Card Preview
              </h2>

              {/* Card Preview */}
              <div
                className={`w-full aspect-[1.586/1] rounded-xl overflow-hidden ${cardThemes[theme].cardClass} p-6 shadow-lg`}
              >
                <div className="h-full flex flex-col justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="ml-4">
                      <h3
                        className={`text-xl font-bold ${cardThemes[theme].textClass}`}
                      >
                        John Doe
                      </h3>
                      <p
                        className={`opacity-90 ${cardThemes[theme].textClass}`}
                      >
                        Senior Developer
                      </p>
                      <p
                        className={`text-sm opacity-80 ${cardThemes[theme].textClass}`}
                      >
                        Tech Company Inc.
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 space-y-2">
                    <p
                      className={`flex items-center ${cardThemes[theme].textClass} opacity-90`}
                    >
                      <i className="bi bi-envelope mr-2"></i>
                      john.doe@example.com
                    </p>
                    <p
                      className={`flex items-center ${cardThemes[theme].textClass} opacity-90`}
                    >
                      <i className="bi bi-phone mr-2"></i>
                      +1 (555) 123-4567
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-4">
                    {socialLinks.map((link, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors ${cardThemes[theme].textClass}`}
                      >
                        <i className={link.icon}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Selection */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Theme Selection
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.keys(cardThemes).map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => setTheme(themeName)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      theme === themeName
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                    }`}
                  >
                    <span className="text-gray-900 dark:text-white capitalize">
                      {themeName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Edit Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Edit Information
            </h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Change Photo
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="Senior Developer"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="Tech Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Social Links
                  </label>
                  {socialLinks.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 mb-4"
                    >
                      <i
                        className={`${link.icon} text-gray-500 dark:text-gray-400`}
                      ></i>
                      <input
                        type="url"
                        placeholder={`Enter your ${link.label} URL`}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCard;
