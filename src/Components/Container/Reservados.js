import React from "react";
import BackButton from "../Pure/BackButton";
import { Outlet } from "react-router-dom";

const Reservados = () => {
  return (
    <div className="generic-container">
      <div className="main-container">
        <h2 className="bold">Reservados</h2>
        <Outlet />
        <BackButton />
      </div>
    </div>
  );
};

export default Reservados;
