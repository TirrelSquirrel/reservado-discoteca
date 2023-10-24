import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FAQ() {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="generic-container">
      <div className="main-container">
        <h2 className="bold">Preguntas frecuentes</h2>
      </div>
    </div>
  );
}
