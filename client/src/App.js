import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { checkAuth } from "./utils/handleAuthDB.js";
import { setUser } from "./features/userSlice.js";
import { getStoredTheme } from "./features/themeSlice.js";

import Home from "./components/home/Home.jsx";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";
import Loading from "./components/Loading.jsx";

import DigitalBusinessCards from "./components/services/DigitalBusinessCards.jsx";
import BusinessesTeams from "./components/services/BusinessesTeams.jsx";
import Pricing from "./components/services/Pricing.jsx";
import Support from "./components/services/Support.jsx";

import Login from "./components/auth/Login.jsx";
import Logout from "./components/auth/Logout.jsx";
import Register from "./components/auth/Register.jsx";

import Terms from "./components/ours/Terms.jsx";
import PrivacyPolicy from "./components/ours/PrivacyPolicy.jsx";
import Security from "./components/ours/Security.jsx";

import Profile from "./components/user/Profile.jsx";
import Dashboard from "./components/user/Dashboard.jsx";

import Platforms from "./components/platforms/Platforms.jsx";

import Company from "./components/company/Company.jsx";

import Additional from "./components/additional/Additional.jsx";
import VerifyEmail from "./components/auth/VerifyEmail.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);

  // =============
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredTheme());
    setLoading(true);
    checkAuth()
      .then((res) => {
        if (res.user) {
          dispatch(setUser(res));
          !res.user.isVerified && navigate("/auth/verify-email");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (user.user) {
      !user.user.isVerified && navigate("/auth/verify-email");
    }
  }, [user, location]);

  return (
    <>
      <div className={theme}>
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-between bg-white text-black dark:text-white dark:bg-gray-900">
          {loading ? (
            <Loading />
          ) : (
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/user">
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/auth">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="logout" element={<Logout />} />
                  <Route path="verify-email" element={<VerifyEmail />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="reset-password/:token"
                    element={<ResetPassword />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/ours">
                  <Route path="terms" element={<Terms />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="security" element={<Security />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/platforms">
                  <Route path=":test" element={<Platforms />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/company">
                  <Route path=":test" element={<Company />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/additional">
                  <Route path=":test" element={<Additional />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/services">
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="support" element={<Support />} />
                  <Route
                    path="businesses-teams"
                    element={<BusinessesTeams />}
                  />
                  <Route
                    path="digital-business-cards"
                    element={<DigitalBusinessCards />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;