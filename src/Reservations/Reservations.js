import React from "react";

function Reservations ({reservations}) {
  // reservationsDisplay = (reservations) => {
  //   return reservations.map(res => {
  //     const newRes = {
  //       name: res.name,
  //       date: res.date,
  //       time: res.time,
  //       guests: res.guests
  //     }
  //   return res
  // })}

  return (
    <article className="res">
      <h2>test</h2>
      <h3>{reservations}</h3>
    </article>
  )
}

export default Reservations