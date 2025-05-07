import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
import useAuthInfo from "../hooks/useAuthInfo";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuthInfo();
  const location = useLocation()
//   console.log(location)

  if (loading) return <Loading></Loading>;

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
