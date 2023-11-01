import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {

  const navigate = useNavigate()

  return (
    <>
      <h2 className="bold">Panel de administración</h2>
      <div className="admin-div-button" onClick={() => navigate('events')}>Eventos</div>
      <div className="admin-div-button">[WIP]Reservados[WIP]</div>
      <div className="admin-div-button" onClick={() => navigate('bottles')}>Botellas</div>
      <div className="admin-div-button" onClick={() => navigate('faq')}>Preguntas frecuentes</div>
    </>
  );
};

export default AdminMenu;
