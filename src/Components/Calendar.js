import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
  
function DefaultCalendar() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
      <div style={{margin:"3rem"}}><h1 className='text-secondary'>Calendar </h1></div>
      <div><Calendar
        onChange={onChange}
        value={value}
      /></div>
    </div>
  );
}
export default DefaultCalendar;
