import React, { useState } from "react";

import Aside from "./Aside";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const { user } = useSelector((state) => state.user);

  const stats = [
    {
      label: "Total Views",
      value: "1,234",
      icon: "bi bi-eye-fill",
      trend: "+12.5%",
    },
    {
      label: "Saved Contacts",
      value: "85",
      icon: "bi bi-person-plus-fill",
      trend: "+5.2%",
    },
    {
      label: "Link Clicks",
      value: "456",
      icon: "bi bi-link-45deg",
      trend: "+8.1%",
    },
    { label: "QR Scans", value: "789", icon: "bi bi-qr-code", trend: "+15.3%" },
  ];

  const businessCards = [
    { name: "Professional Card", views: 856, lastUpdated: "2 days ago" },
    { name: "Creative Card", views: 432, lastUpdated: "5 days ago" },
    { name: "Minimal Card", views: 267, lastUpdated: "1 week ago" },
  ];

  const recentActivity = [
    {
      action: "Card viewed",
      details: "by John Smith from LinkedIn",
      time: "2 hours ago",
      icon: "bi bi-eye",
    },
    {
      action: "Contact saved",
      details: "by Sarah Johnson",
      time: "5 hours ago",
      icon: "bi bi-person-plus",
    },
    {
      action: "Website clicked",
      details: "from QR code scan",
      time: "1 day ago",
      icon: "bi bi-link",
    },
  ];

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* Sidebar and Main Content */}
        <div className="flex flex-1 min-h-[80vh]">
          {/* Sidebar */}
          <Aside />

          {/* Main Content */}
          <main className="flex-1 p-2 md:p-6">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Dashboard
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Welcome back, {user?.username}
                  </p>
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <i className="bi bi-plus-lg mr-2"></i>
                  Create New Card
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {stat.label}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                          {stat.value}
                        </h3>
                      </div>
                      <i
                        className={`${stat.icon} text-2xl text-blue-600 dark:text-blue-400`}
                      ></i>
                    </div>
                    <p className="text-green-500 text-sm mt-2">
                      <i className="bi bi-arrow-up-short"></i>
                      {stat.trend} this month
                    </p>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Business Cards Section */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Your Business Cards
                    </h2>
                    <div className="space-y-4">
                      {businessCards.map((card, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg cursor-pointer transition-colors ${
                            selectedCard === index
                              ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700"
                              : "bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => setSelectedCard(index)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {card.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Last updated {card.lastUpdated}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {card.views} views
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-6">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <i
                            className={`${activity.icon} text-blue-600 dark:text-blue-400`}
                          ></i>
                        </div>
                        <div className="ml-4">
                          <p className="text-gray-900 dark:text-white font-medium">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {activity.details}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <button className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <i className="bi bi-share text-blue-600 dark:text-blue-400 mr-2"></i>
                  <span className="text-gray-900 dark:text-white">
                    Share Cards
                  </span>
                </button>
                <button className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <i className="bi bi-pencil text-blue-600 dark:text-blue-400 mr-2"></i>
                  <span className="text-gray-900 dark:text-white">
                    Edit Templates
                  </span>
                </button>
                <button className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <i className="bi bi-gear text-blue-600 dark:text-blue-400 mr-2"></i>
                  <span className="text-gray-900 dark:text-white">
                    Settings
                  </span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
