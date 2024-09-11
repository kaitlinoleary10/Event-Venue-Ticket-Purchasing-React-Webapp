import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

function Event() {
  const { eventName, eventDate, eventDescription } = useParams();

  return (
    <div className="event-page">
      <h1>Details for {eventName.replace(/-/g, ' ')} on {eventDate}</h1>
      <p>eventDescription</p>
      <button onClick={scrollDown}>Buy Tickets</button>
    </div>
  );
}

export default Event;
