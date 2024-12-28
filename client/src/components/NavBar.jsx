import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTheme, toggleTheme } from "../features/themeSlice";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

import appLogo from "../img/appLogo.png";

const NavBar = () => {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(toggleTheme());
    dispatch(storeTheme(theme === "light" ? "dark" : "light"));
  };

  // ===========================

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ===========================

  const [navBar, setNavBar] = useState("bg-transparent");

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

  // ===========================

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
                <div
                  ref={dropdownRef}
                  className="relative font-[sans-serif] w-max mx-auto"
                >
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
                    <Link className="py-2.5 px-5 flex items-center text-[#333] dark:text-gray-200 text-sm cursor-pointer">
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
                          <i className="bi bi-person text-lg mr-3"></i>
                          View profile
                        </Link>

                        {/* Dashboard */}
                        <Link
                          to="/user/dashboard"
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                        >
                          <i class="bi bi-bar-chart text-lg mr-3"></i>
                          Dashboard
                        </Link>

                        {/* Business Cards */}
                        <Link
                          to="/user/b-card"
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                        >
                          <i class="bi bi-person-vcard text-lg mr-3"></i>
                          Business Cards
                        </Link>
                      </>
                    )}

                    {/* theme */}
                    <Link
                      onClick={themeToggle}
                      className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                    >
                      {theme === "dark" ? (
                        <i class="bi bi-sun text-lg mr-3"></i>
                      ) : (
                        <i class="bi bi-moon text-lg mr-3"></i>
                      )}
                      <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
                    </Link>

                    <hr className="w-5/6 mx-auto opacity-45" />

                    {/* logout */}
                    <Link
                      to="/auth/logout"
                      className="py-2.5 px-5 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 text-[#333] dark:text-gray-200 text-sm cursor-pointer"
                    >
                      <i className="bi bi-box-arrow-right text-lg mr-3"></i>
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
