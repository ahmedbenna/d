import React, { useState } from 'react';
import CalendarTemplate from './CalendarTemplate';

function Rendezvous() {
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
    primaryColor: "#2196F3",
    secondaryColor: "#00234b",
    primaryFontColor: "#444444",
    fontFamily: "Roboto",
    fontSize: 14,
    startTime: "6:00",
    endTime: "18:00",

  })
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default Rendezvous;