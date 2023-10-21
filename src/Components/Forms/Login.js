import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //! TEMP
  const tempEmail = "baute@email.es";
  const tempPass = "pass123";

  //! FIN TEMP

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const [registred, setRegistred] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando sesion");
    if (email !== tempEmail || password !== tempPass) {
      console.error("Credenciales invalidas");
      setInvalidCredentials(true);

      return;
    }

    setEmail("");
    setPassword("");
    setInvalidCredentials(false);
    console.log("Sesion iniciada");
    navigate("/main");
  };

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login-container">
      {registred ? (
        <Form onSubmit={(e) => handleLogin(e)}>
          <h2 className="login-title">Inicia sesión</h2>

          <div className="login-form">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@ejemplo.es"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="login-buttons">
              <Button
                variant="warning"
                onClick={() => setRegistred(!registred)}
              >
                Regístrate
              </Button>

              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </div>
            {invalidCredentials && (
              <Alert variant="danger" className="mt-2">
                Credenciales inválidas
              </Alert>
            )}
          </div>
        </Form>
      ) : (
        <Form onSubmit={(e) => handleRegister(e)}>
          <h2 className="login-title">Regístrate</h2>

          <div className="login-form">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@ejemplo.es"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repite tu contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPasswordRepeat(e.target.value)}
                required
              />
            </Form.Group>

            <div className="login-buttons">
              <Button
                variant="warning"
                onClick={() => setRegistred(!registred)}
              >
                ¿Ya tienes cuenta?
              </Button>

              <Button variant="primary" type="submit">
                Registrar
              </Button>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Login;
