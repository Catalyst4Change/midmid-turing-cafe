import React from "react";
import './Reservations.css'

function Reservations ({reservations}) {
  console.log(reservations);
  return reservations.map(res => {
    return (
        <article key={res.name + res.date} id={res.name + res.guests} className="res">
          <h3>{res.name}</h3>
          <h3>{res.date}</h3>
          <h3>{res.time}</h3>
          <h3>Number of Guests: {res.guests}</h3>
          <button>CANCEL</button>
        </article>
    )

  })

}

export default Reservations