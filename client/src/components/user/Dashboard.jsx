import React from "react";

import Aside from "./Aside";

const Dashboard = () => {
  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        {/* Sidebar and Main Content */}
        <div className="flex flex-1 min-h-[80vh]">
          {/* Sidebar */}
          <Aside />

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Welcome to Your Dashboard</h2>
              <p className="mt-2 text-lg">
                Manage your digital business cards and track analytics
                efficiently.
              </p>
            </div>

            {/* Example Grid of Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className={`p-6 rounded-lg shadow dark:bg-gray-700 bg-white border border-gray-200`}
              >
                <h3 className="text-xl font-semibold">Total Cards</h3>
                <p className="mt-2 text-4xl font-bold">45</p>
              </div>
              <div className="p-6 rounded-lg dark:bg-gray-700 shadow bg-white border border-gray-200">
                <h3 className="text-xl font-semibold">Views</h3>
                <p className="mt-2 text-4xl font-bold">12,300</p>
              </div>
              <div
                className={`p-6 rounded-lg shadow dark:bg-gray-700 bg-white border border-gray-200`}
              >
                <h3 className="text-xl font-semibold">Interactions</h3>
                <p className="mt-2 text-4xl font-bold">678</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
