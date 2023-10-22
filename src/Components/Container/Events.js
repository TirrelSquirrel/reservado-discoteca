import React from 'react';
import BackButton from '../Pure/BackButton';

const Events = () => {

    const eventsArray = [
      {
        name: "Inauguración",
        description: "Inauguración de nuestra nueva sala",
        date: "21/10/2023",
      },
      {
        name: "Halloween",
        description: "Una noche terrorífica",
        date: "31/10/2023",
      },
      {
        name: "Fiesta de disfraces",
        description:
          "Ven con la cara de otro, el mejor disfraz se lleva un premio",
        date: "14/11/2023",
      },
    ];
    
    return (
      <div className="generic-container">
        <div className="main-container">
          {eventsArray.map((event) => {
            return (
              <div className="event-item px-2">
                <p className="event-name">{event.name}</p>
                <p className="event-description">{event.description}</p>
                <p className="event-date">{event.date}</p>
              </div>
            );
          })}
          <BackButton />
        </div>
      </div>
    );
}

export default Events;
