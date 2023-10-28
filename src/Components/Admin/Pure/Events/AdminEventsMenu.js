import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminEventsMenu = () => {
    const navigate = useNavigate()
    return (
      <>
        <h2 className="bold">Eventos</h2>
        <div
          className="admin-div-button"
          onClick={() => {
            console.log("yendo");
            navigate("create");
          }}
        >
          Nuevo
        </div>
        <div className="admin-div-button">Editar</div>
        <div className="admin-div-button">Eliminar</div>
      </>
    );
}

export default AdminEventsMenu;
