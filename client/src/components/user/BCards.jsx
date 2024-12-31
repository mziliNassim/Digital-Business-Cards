import React, { useState } from "react";
import Aside from "./Aside";

const BCards = () => {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    {
      id: 1,
      name: "Professional Card",
      template: "Modern Dark",
      views: 1234,
      lastModified: "2024-03-15",
      status: "active",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "Creative Portfolio",
      template: "Gradient Blue",
      views: 856,
      lastModified: "2024-03-10",
      status: "active",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Networking Card",
      template: "Minimal White",
      views: 567,
      lastModified: "2024-03-05",
      status: "draft",
      thumbnail: "/api/placeholder/300/200",
    },
    {
      id: 4,
      name: "Sales Team Card",
      template: "Corporate",
      views: 989,
      lastModified: "2024-03-01",
      status: "active",
      thumbnail: "/api/placeholder/300/200",
    },
  ];

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          {/* Sidebar and Main Content */}
          <div className="flex flex-1 min-h-[80vh]">
            {/* Sidebar */}
            <Aside />

            {/* Main Content */}
            <main className="flex-1 p-6">
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      My Business Cards
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                      Manage and organize your digital business cards
                    </p>
                  </div>
                  <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center">
                    <i className="bi bi-plus-lg mr-2"></i>
                    Create New Card
                  </button>
                </div>

                {/* Filters and Controls */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                      <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="text"
                        placeholder="Search cards..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Sort */}
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="recent">Most Recent</option>
                        <option value="views">Most Viewed</option>
                        <option value="name">Name</option>
                      </select>

                      {/* View Toggle */}
                      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                        <button
                          onClick={() => setView("grid")}
                          className={`p-2 rounded-lg ${
                            view === "grid"
                              ? "bg-white dark:bg-gray-600 shadow-sm"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <i className="bi bi-grid"></i>
                        </button>
                        <button
                          onClick={() => setView("list")}
                          className={`p-2 rounded-lg ${
                            view === "list"
                              ? "bg-white dark:bg-gray-600 shadow-sm"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <i className="bi bi-list"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cards Grid/List */}
                {view === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <img
                          src={card.thumbnail}
                          alt={card.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {card.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {card.template}
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                card.status === "active"
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {card.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <i className="bi bi-eye mr-1"></i>
                              <span>{card.views}</span>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-share"></i>
                              </button>
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-three-dots"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={card.thumbnail}
                              alt={card.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {card.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {card.template}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-gray-600 dark:text-gray-300">
                              <i className="bi bi-eye mr-1"></i>
                              <span>{card.views}</span>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                card.status === "active"
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {card.status}
                            </span>
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-share"></i>
                              </button>
                              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <i className="bi bi-three-dots"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default BCards;
