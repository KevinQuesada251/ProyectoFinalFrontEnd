import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const estasautenticado = localStorage.getItem("rol");

  if (estasautenticado === "admin") {
    return element;
  } else {
    return <Navigate to="/login"/>;
  }
};

export default PrivateRoute;