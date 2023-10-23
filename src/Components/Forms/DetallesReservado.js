import React from "react";
import { useParams } from "react-router-dom";

export default function DetallesReservado() {
  let bookPlace = useParams().bookPlace.replace("-", " ");
  
  return (
    <>
      <h3 className="book-detail-title">{bookPlace}</h3>
    </>
  );
}
