import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BottlesList() {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/drink").then((data) => {
      setBottles(data.data);
    });
  }, []);

  return (
    <div className="generic-container">
      <div className="main-container">
        {bottles.map((bottle) => {
          return (
            <div className="event-item" key={bottle._id}>
              <p className="event-name">
                {bottle.name} {bottle.cuantity}L
              </p>
              <img src="undefined" alt={"img " + bottle.name + " img"} />
              <p className="event-name">{bottle.price}€</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
