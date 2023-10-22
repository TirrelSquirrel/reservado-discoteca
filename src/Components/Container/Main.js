import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
    }
    return (
        <div className='generic-container'>
            <div className='main-container'>
                <div className='main-div-button'>Eventos</div>
                <div className='main-div-button'>Reservados</div>
                <div className='main-div-button'>Botellas</div>
                <div className='main-div-button'>Preguntas frecuentes</div>
                <div className='main-div-button logout' onClick={handleLogout}>Cerrar sesión</div>
            </div>
        </div>
    );
}

export default Main;
