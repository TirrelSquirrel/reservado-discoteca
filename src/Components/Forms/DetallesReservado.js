import React from "react";
import { useParams } from "react-router-dom";
import maishaMap from "../../img/vectors/Maisha.svg";

export default function DetallesReservado() {
  let bookPlace = useParams().bookPlace.replace("-", " ");

  const maps = [
    { name: "Rock&Mola", map: "undefined" },
    { name: "Maisha", map: maishaMap },
    { name: "Winter Club", map: "undefined" },
  ];

  const place = maps.find((o) => o.name === bookPlace);

  return (
    <>
      <h3 className="book-detail-title">{bookPlace}</h3>
      <img src={place.map} alt="map" className="map-zone-img" />
    </>
  );
}
