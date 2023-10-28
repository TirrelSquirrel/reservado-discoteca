import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from './BackButton'

export default function FAQ() {

  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/faq')
      .then((res) => {        
        setFaqList(res.data)
        console.log("FAQs", faqList);
      })
  }, []);

  return (
    <div className="generic-container">
      <div className="main-container">
        <h2 className="bold">Preguntas frecuentes</h2>
        {faqList.map((faq) => {
          return (
            <div className="event-item" key={faq._id}>
              <p className="event-name">{faq.question}</p>
              <p className="event-description">{faq.answer}</p>
            </div>
          )
        })}
        <BackButton />
      </div>
    </div>
  );
}
