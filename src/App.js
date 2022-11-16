import React from "react";
import "./style.css";

import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
  }, []);

  return (
    <span>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;