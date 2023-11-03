import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { handleLogin } from "../Slices/user";
import Image from "./Image";

const PrivateRoute = () => {
    const user = useSelector((state) => state.userInfo.user);

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
      let token = localStorage.getItem("token");
      if (token) {
        dispatch(handleLogin(token));
      }
      setTimeout(() => {
        setLoading(false);
      },500);
    },);

    if (loading) {
      return <Image />
    }

    if (!user) {
      return <Navigate to="/login" />
    }

    return <Outlet />
};

export default PrivateRoute;