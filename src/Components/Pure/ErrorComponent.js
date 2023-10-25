import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorComponent = () => {

    const navigate = useNavigate()

    return (
      <div className="generic-container">
        <div className="main-container">
          ERROR 404 - Página no encontrada
          <Button type="primary" variant="primary" onClick={() => navigate('/main')}>
            Volver a inicio
          </Button>
        </div>
      </div>
    );
}

export default ErrorComponent;
