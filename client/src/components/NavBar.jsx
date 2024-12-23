import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTheme, toggleTheme } from "../features/themeSlice";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

import appLogo from "../img/appLogo.png";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [navBar, setNavBar] = useState("bg-transparent");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);

  const themeToggle = () => {
    dispatch(toggleTheme());
    dispatch(storeTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setNavBar(
        isTop
          ? "bg-transparent dark:bg-transparent"
          : "shadow-top border-gray-200 bg-white dark:bg-gray-900"
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-50 top-0 left-0 right-0 backdrop:blur-lg shadow-buttom bg-white dark:bg-gray-900  md:${navBar}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* app logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img src={appLogo} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100 ">
              Flowbite
            </span>
          </Link>

          {/* user && toggle btn */}
          <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* user */}
            {user?.user ? (
              <>
                <div className="relative font-[sans-serif] w-max mx-auto">
                  <button
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                    type="button"
                    id="dropdownToggle"
                    className="px-4 py-2 flex items-center rounded-full text-[#333] dark:text-gray-200 text-sm border border-gray-300 dark:border-gray-700 outline-none hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <img
                      src="https://readymadeui.com/profile_6.webp"
                      className="w-7 h-7 mr-3 rounded-full shrink-0"
                    ></img>
                    {user.user.username}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-gray-400 inline ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>

                  <ul
                    id="dropdownMenu"
                    className={`${
                      toggleDropdown ? "absolute" : "hidden"
                    } right-0 shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto dark:bg-gray-800`}
                  >
                    {/* Email */}
                    <Link
                      to="/user/profile"
                      className="py-2.5 px-5 flex items-center text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                    >
                      {user.user.email}
                    </Link>

                    <hr className="w-5/6 mx-auto opacity-45" />

                    {user.user.isVerified && (
                      <>
                        {/* profile */}
                        <Link
                          to="/user/profile"
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-4 h-4 mr-3"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                              data-original="#000000"
                            ></path>
                          </svg>
                          View profile
                        </Link>

                        {/* Dashboard */}
                        <Link
                          to="/user/dashboard"
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-4 h-4 mr-3"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                              data-original="#000000"
                            ></path>
                          </svg>
                          Dashboard
                        </Link>
                      </>
                    )}

                    {/* theme */}
                    <Link
                      onClick={themeToggle}
                      className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                    >
                      {theme === "dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-brightness-high w-4 h-4 mr-3"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-moon w-4 h-4 mr-3"
                        >
                          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                        </svg>
                      )}
                      <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
                    </Link>

                    <hr className="w-5/6 mx-auto opacity-45" />

                    {/* logout */}
                    <Link
                      to="/auth/logout"
                      className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 mr-3"
                        viewBox="0 0 6.35 6.35"
                      >
                        <path
                          d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      Logout
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm text-[#f35a57] rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    GET START
                  </span>
                </Link>

                <span
                  onClick={themeToggle}
                  className="cursor-pointer py-1.5 px-2 ml-4 text-xl border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 dark:hover:text-white"
                >
                  {theme === "dark" ? (
                    <i className="bi bi-brightness-high"></i>
                  ) : (
                    <i className="bi bi-moon"></i>
                  )}
                </span>
              </>
            )}

            {/* toggle btn */}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="navLinks flex flex-col font-medium p-4 md:p-0 mt-4 bg-gray-100 dark:bg-gray-800 dark:md:bg-transparent md:bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white ">
              <li>
                <NavLink
                  to="/services/digital-business-cards"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent active:text-[#f35a57] md:hover:text-[#f35a57] md:p-0 dark:text-white md:dark:hover:text-[#f35a57] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Digital Business Cards
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/businesses-teams"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent active:text-[#f35a57] md:hover:text-[#f35a57] md:p-0 dark:text-white md:dark:hover:text-[#f35a57] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  For Businesses & Teams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/pricing"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-[#f35a57] md:p-0 dark:text-white md:dark:hover:text-[#f35a57] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
