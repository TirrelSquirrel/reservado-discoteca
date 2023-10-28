import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NewEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createEvent = (e) => {
    e.preventDefault();
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