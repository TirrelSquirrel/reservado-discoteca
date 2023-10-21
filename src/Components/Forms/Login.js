import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
      <div className="login-container">
        <Form>
          <h2 className="login-title">Inicia sesión</h2>

          <div className="login-form">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="correo@email.es" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' placeholder='Contraseña' />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Entrar
            </Button>
          </div>
        </Form>
      </div>
    );
}

export default Login;
