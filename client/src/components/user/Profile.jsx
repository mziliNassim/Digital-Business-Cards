import React from "react";
import Aside from "./Aside"; // Assuming Aside is a separate component
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex items-center justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          {/* Sidebar and Main Content */}
          <div className="flex flex-1 min-h-[80vh]">
            {/* Sidebar */}
            <Aside />

            {/* Main Content */}
            <main className="flex-1 px-6">
              {/* Profile Header */}
              <div className="flex flex-col mb-5 overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-gray-100">
                <div
                  className="mb-8 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://cdn.tailkit.com/media/placeholders/photo-JgOeRuGD_Y4-800x400.jpg')",
                  }}
                >
                  <div className="flex h-32 items-end justify-center">
                    <div className="-mb-12 rounded-full bg-gray-200/50 p-2 dark:bg-gray-600/50">
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                        alt="User Avatar"
                        className="inline-block size-20 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grow p-5 text-center">
                  <h3 className="mb-1 mt-3 text-lg font-semibold">
                    {user.username}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {user.email} ∙ 0 card
                  </p>
                </div>
              </div>

              {/* Profile Infos */}
              <div className="mb-5">
                {/* Title */}
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                    Manage Your Profile
                  </h2>
                  <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                    Update your personal information and customize your
                    preferences.
                  </p>
                </div>
                {/* "infos" */}
                <div className="bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 dark:divide-gray-700">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="capitalize text-sm font-medium text-gray-500">
                          username
                        </dt>
                        <dd className="relative w-fit mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                          {user.username}
                          <i class="bi bi-pencil-square absolute -top-1 -right-3 text-gray-400 dark:text-gray-600 cursor-pointer text-xs"></i>
                        </dd>
                      </div>

                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="capitalize text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="w-fit mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-2">
                          {user.email}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Manage Password */}
              <div className="mb-5">
                {/* Title */}
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                    Edite Your Password
                  </h2>
                  <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                    Update your personal information and customize your
                    preferences.
                  </p>
                </div>
                {/* "infos" */}
                <div className="bg-white dark:bg-gray-900 overflow-hidden">
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 dark:divide-gray-700">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 items-center">
                        <dt className="capitalize text-sm font-medium text-gray-500">
                          Password
                        </dt>
                        <dd className="relative w-full mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-5">
                          <input
                            type="password"
                            id="floating_filled"
                            class="block rounded-lg px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="floating_filled"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Password
                          </label>
                        </dd>
                      </div>

                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 items-center">
                        <dt className="capitalize text-sm font-medium text-gray-500">
                          New Password
                        </dt>
                        <dd className="relative w-full mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-5">
                          <input
                            type="password"
                            id="floating_filled"
                            class="block rounded-lg px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="floating_filled"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            New Password
                          </label>
                        </dd>
                      </div>

                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 items-center">
                        <dt className="capitalize text-sm font-medium text-gray-500">
                          Confirm Password
                        </dt>
                        <dd className="relative w-full mt-1 text-sm text-gray-900 dark:text-gray-200 sm:mt-0 sm:col-span-5">
                          <input
                            type="password"
                            id="floating_filled"
                            class="block rounded-lg px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="floating_filled"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Confirm Password
                          </label>
                        </dd>
                      </div>

                      <div className="py-3 sm:py-5  sm:px-6 flex items-center justify-end">
                        <button
                          type="button"
                          class="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-gray-950 dark:bg-gray-300 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </dl>
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

export default Profile;
