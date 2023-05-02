import React, {useState} from "react";
import Calendar from 'react-calendar';

const MyCalendar = () => {
  const [value, onChange] = useState<Date | null>(new Date());

  return (
    <div style={{justifySelf: "center"}}>
      <Calendar calendarType="US" onChange={(nextValue: any) => onChange(nextValue)} value={value} />
    </div>
  );
};

export default MyCalendar;
