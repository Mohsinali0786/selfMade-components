import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
export function Calender({ dateCount , prevDate}) {
    // console.log(startDate)
  const [date, setDate] = useState(new Date());
  let myDates=[];
  let daydate=new Date()
  let month=daydate.getMonth()
  let year=daydate.getFullYear()

  const handleChange = (value) => {
    console.log('value',typeof(value))
    setDate(value);
    // dispatch(set_Selected_Date({ data: value, value, isClicked: true }));
  };
  const filterDate = () => {
    var now = new Date();
    var date = new Date();
    now = now.getDate();
    for (var d = now; d <= now + dateCount; d++) {
      let myDate = new Date(date.setDate(d));
      myDates.push(myDate.getDate());
    //   console.log(myDates);
    }
   };
   function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()-1;
}
   filterDate()
  
  return (
    <>
      <div className="calendar-container">
        <Calendar
          onChange={handleChange}
          value={date}
          minDate={new Date()}
          maxDate={new Date(year,month,daysInMonth(month, year))}
          defaultView="month"
          minDetail="month"
          tileDisabled={({date , view}) =>!myDates.includes(date.getDate())}
          className='maxx-width'
        />
      </div>
      {date.length > 0 ? (
        <p>
          <span>Start:</span> {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span> {date.toDateString()}
        </p>
      )}
      {/* {showTime ? <Times date={date} reqData={data}/> : null} */}
    </>
  );
}
