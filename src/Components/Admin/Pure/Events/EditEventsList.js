import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditEventsList = () => {
  const navigate = useNavigate();

  const [eventsArray, seteventsArray] = useState([]);

  useEffect(() => {
    getEvents()
  }, []);

  const getEvents = () => {
    axios
      .get("http://localhost:5000/event")
      .then((res) => seteventsArray(res.data));
  }

  const deleteEvent = (id) => {
    const body = {
      _id: id,
    };
    axios
      .put("http://localhost:5000/event/delete", body)
      .then((res) => {
        console.log(res)
        getEvents()
      });
  };

  return (
    <>
      <h2 className="bold">Editar eventos</h2>
      {eventsArray.map((event) => {
        return (
          <div className="event-item px-2" key={event._id}>
            <p className="event-name">{event.title}</p>
            <p className="event-description">{event.description}</p>
            <p className="event-date">{event.date}</p>
            <div className="card-buttons">
              <div
                className="icon-button-div edit"
                onClick={() => navigate(event._id)}
              >
                <span className="material-symbols-outlined">edit</span>
              </div>
              <div className="icon-button-div delete" onClick={() => deleteEvent(event._id)}>
                <span className="material-symbols-outlined">delete</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EditEventsList;
