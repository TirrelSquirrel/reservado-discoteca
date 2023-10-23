import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservadosMenu = () => {

  const navigate = useNavigate()

    return (
      <>
        <h4>¿En qué zona quieres reservar?</h4>
        <div className="main-div-button" onClick={() => navigate('Rock&Mola')}>Rock&Mola</div>
        <div className="main-div-button" onClick={() => navigate('Maisha')}>Maisha</div>
        <div className="main-div-button" onClick={() => navigate('Winter-Club')}>Winter Club</div>
      </>
    );
}

export default ReservadosMenu;
