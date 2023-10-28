import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {

  const navigate = useNavigate()

  return (
    <>
      <h2 className="bold">Panel de administración</h2>
      <div className="admin-div-button" onClick={() => navigate('events')}>Eventos</div>
      <div className="admin-div-button">Reservados</div>
      <div className="admin-div-button">Botellas</div>
      <div className="admin-div-button">Preguntas frecuentes</div>
    </>
  );
};

export default AdminMenu;
