import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const createEvent = (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
      date,
    };
    axios
      .post("http://localhost:5000/event", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate(-1)
  };
  return (
    <>
      <Form onSubmit={(e) => createEvent(e)}>
        <h2 className="bold">Nuevo evento</h2>
        <div className="event-form">
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulo del evento"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Descripción del evento"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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

export default NewEvent;
