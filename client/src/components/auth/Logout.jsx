import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { clearUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";

import { logoutAuth } from "../../utils/handleAuthDB";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    logoutAuth()
      .then(() => {
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => console.error(err));
  }, [dispatch, navigate]);

  return <h1>Logout</h1>;
};

export default Logout;
