import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { storeTheme, toggleTheme } from "../../features/themeSlice";

const Aside = () => {
  const [active, setActive] = useState("profile");
  const location = useLocation(true);

  useEffect(() => {
    console.log("Aside ~ location:", location.pathname);
  }, [location]);

  // ==============

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(toggleTheme());
    dispatch(storeTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <aside
        className={`hidden lg:block w-64 space-y-4 py-6 px-4 dark:bg-gray-800 rounded-tr-xl rounded-br-xl bg-gray-100  border-gray-200 fixed lg:relative`}
      >
        <nav className="space-y-2 flex flex-col justify-between h-full">
          <div>
            {/* profile */}
            <Link
              to="/user/profile"
              className={`flex items-center space-x-3 p-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-200
                    ${
                      location.pathname == "/user/profile" &&
                      "dark:bg-gray-700 bg-gray-200"
                    }
                  `}
            >
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>

            {/* Dashboard */}
            <Link
              to="/user/dashboard"
              className={`flex items-center space-x-3 p-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-200
                    ${
                      location.pathname == "/user/dashboard" &&
                      "dark:bg-gray-700 bg-gray-200"
                    }
                  `}
            >
              <i className="bi bi-bar-chart"></i>
              <span>Dashboard</span>
            </Link>

            {/* Business Cards */}
            <Link
              to="/user/b-cards"
              className={`flex items-center space-x-3 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md
                    ${
                      location.pathname == "/user/b-cards" &&
                      "dark:bg-gray-700 bg-gray-200"
                    }
                  `}
            >
              <i class="bi bi-boxes"></i>
              <span>My Business Cards</span>
            </Link>

            {/* Add Business Cards */}
            <Link
              to="/user/add-card"
              className={`flex items-center space-x-3 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md
                    ${
                      location.pathname == "/user/add-card" &&
                      "dark:bg-gray-700 bg-gray-200"
                    }
                  `}
            >
              <i className="bi bi-credit-card"></i>
              <span>Create Business Card</span>
            </Link>
          </div>

          <div>
            {/* theme */}
            <Link
              onClick={themeToggle}
              className={`flex items-center space-x-3 p-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-200`}
            >
              {theme === "dark" ? (
                <i className="bi bi-sun text-lg"></i>
              ) : (
                <i className="bi bi-moon text-lg"></i>
              )}
              <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
            </Link>

            {/* logout */}
            <Link
              to="/auth/logout"
              className={`flex items-center space-x-3 p-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-200`}
            >
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
