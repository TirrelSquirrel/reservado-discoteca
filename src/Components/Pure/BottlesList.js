import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BottlesList() {

    const [bottles, setBottles] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/drink')
        .then((data) => {
            setBottles(data.data)
        })
    }, [])
    
  return (
    <div>{bottles.map((bottle, index) => {
        return ( <div key={index}>{bottle.name}</div>)
    })}</div>
  )
}
