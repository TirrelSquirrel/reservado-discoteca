import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditBottlesList = () => {

    const navigate = useNavigate()

    const [bottlesArray, setBottlesArray] = useState([]);

    useEffect(() => {        
        getBottles()
    }, []);

    const getBottles = () => {
        axios
            .get('http://localhost:5000/drink')
            .then((res) => setBottlesArray(res.data))
    }

    const deleteBottle = (id) => {
      const body = {
        _id: id,
      };
      axios.put("http://localhost:5000/drink/delete", body).then((res) => {
        console.log(res);
        getBottles();
      });
    };

    return (
      <>
        <h2 className="bold">Editar botellas</h2>
        {bottlesArray.map((bottle) => {
          return (
            <div className="event-item px-2" key={bottle._id}>
              <p className="event-name">{bottle.name} {bottle.cuantity}L</p>
              <p className="event-name">{bottle.price}€</p>
              <div className="card-buttons">
                <div
                  className="icon-button-div edit"
                  onClick={() => navigate(bottle._id)}
                >
                  <span className="material-symbols-outlined">edit</span>
                </div>
                <div
                  className="icon-button-div delete"
                  onClick={() => deleteBottle(bottle._id)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default EditBottlesList;
