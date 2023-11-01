import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewBottle = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [cuantity, setCuantity] = useState(0.7);

  const createEvent = (e) => {
    e.preventDefault();
    const body = {
        name,
        price,
        cuantity
    };
    axios
      .post("http://localhost:5000/drink", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate(-1);
  };
  return (
    <>
      <Form onSubmit={(e) => createEvent(e)}>
        <h2 className="bold">Nueva botella</h2>
        <div className="event-form">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la botella"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control              
              type="number"
              placeholder="Precio €"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cantidad (en litros)</Form.Label>
            <Form.Control
              type="number"
              placeholder="0.7"
              value={cuantity}
              onChange={(e) => setCuantity(e.target.value)}
            />
          </Form.Group>
          <div className="admin-form-buttons">
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewBottle;
