import React from 'react';
import { useNavigate } from "react-router-dom";


const MainMenu = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
      navigate("/");
    }
    
    return (
        <div className="generic-container">
          <div className="main-container">
            <h2>Bienvenidx "Nombre"</h2>

            <div className="main-div-button" onClick={() => navigate('events')}>Eventos</div>
            <div className="main-div-button" onClick={() => navigate('book')}>Reservados</div>
            <div className="main-div-button">Botellas</div>
            <div className="main-div-button">Preguntas frecuentes</div>
            <div className="main-div-button logout" onClick={handleLogout}>
              Cerrar sesión
            </div>
          </div>
        </div>
    );
}

export default MainMenu;
