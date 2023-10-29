import React from "react";
import { useNavigate } from "react-router-dom";

const AdminEventsMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="bold">Eventos</h2>
      <div className="admin-div-button" onClick={() => navigate("create")}>
        Nuevo
      </div>
      <div className="admin-div-button" onClick={() => navigate('edit')}>Editar</div>
    </>
  );
};

export default AdminEventsMenu;
