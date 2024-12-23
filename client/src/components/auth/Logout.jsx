import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../features/userSlice";
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
  }, []);

  return <h1>Logout</h1>;
};

export default Logout;
