import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { loginSuccess } from "./authActions";

const PrivateRoutes = () => {
  const [isRestoring, setIsRestoring] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
    setIsRestoring(false);
  }, [dispatch]);

  if (isRestoring) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
