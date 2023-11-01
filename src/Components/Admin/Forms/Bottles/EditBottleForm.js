import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const EditBottleForm = () => {
  const navigate = useNavigate();
  const bottleid = useParams().bottleid;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [cuantity, setCuantity] = useState(0.7);

  useEffect(() => {
    axios.get("http://localhost:5000/drink/" + bottleid).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setCuantity(res.data.cuantity);
    });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const bottle = {
      _id: bottleid,
      name,
      price,
      cuantity,
    };

    axios.put("http://localhost:5000/drink/", bottle).then((res) => {
      console.log(res);
      navigate(-1);
    });
  };

  return (
    <>
      <Form onSubmit={(e) => handleEdit(e)}>
        <h2 className="bold">Nueva botella</h2>
        <div className="event-form">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la botella"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio €</Form.Label>
            <Form.Control
              type="number"
              placeholder="Precio €"
              value={price}
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

export default EditBottleForm;
