import React, { useEffect, useState } from "react";
import BackButton from "../Pure/BackButton";
import axios from "axios";

const Events = () => {

  const [eventsArray, seteventsArray] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/event')
      .then((res) => seteventsArray(res.data))
  }, []);

  return (
    <div className="generic-container">
      <div className="main-container">
        {eventsArray.map((event) => {
          return (
            <div className="event-item px-2" key={event._id}>
              <p className="event-name">{event.title}</p>
              <p className="event-description">{event.description}</p>
              <p className="event-date">{event.date}</p>
            </div>
          );
        })}
        <BackButton />
      </div>
    </div>
  );
};

export default Events;
