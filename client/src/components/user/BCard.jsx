import React from "react";
import Aside from "./Aside";

const BCard = () => {
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
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Manage Your Digital Business Card
                </h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  Create, customize, and share your digital business card with
                  ease.
                </p>
              </div>

              {/* Card Management Section */}
              <div className="mt-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Example Card */}
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Card Title
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      A brief description of the card's purpose.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500">
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Add New Card */}
                  <div className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <i className="bi bi-plus-circle text-4xl text-gray-400 dark:text-gray-500"></i>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Add New Card
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default BCard;
