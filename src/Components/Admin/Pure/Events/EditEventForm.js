import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';


const EditEventForm = () => {
    const eventid = useParams().eventid

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        //TODO:Backend para esta llamada
        axios.get('http://localhost:5000/event/' + eventid)
            .then((res) => {
                setTitle(res.data.title)
                setDescription(res.data.description)
                setDate(res.data.date)
            })
        
    }, []);


    const handleEdit = (e) => {

    }

    return (
      <>
        <Form onSubmit={(e) => handleEdit(e)}>
          <h2 className="bold">Nuevo evento</h2>
          <div className="event-form">
            <Form.Group className="mb-3">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo del evento"
                value={title}
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
                value={description}
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
}

export default EditEventForm;