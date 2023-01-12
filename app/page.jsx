import React, { useContext } from "react";
import Login from "../components/Login";
import UserDashboard from "../components/userDashboard";
import { AuthContext } from "../context/AuthContext";

const page = () => {
//   const { loading } = useContext(AuthContext);
//   console.log(loading);
  return (
    <div>
      <Login />
      <UserDashboard />
    </div>
  );
};

export default page;
