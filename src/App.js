import React from 'react';
import './style.css';

import { format, compareAsc, addMinutes } from 'date-fns';

export default function App() {
  const startTime = new Date(2000, 0, 1, 0, 0); // 12:00 AM
  const endTime = new Date(2000, 0, 1, 23, 45); // 11:45 PM
  console.log(startTime, endTime, 'dfdfdf');

  const timeArray = [];

  for (let time = startTime; time <= endTime; time = addMinutes(time, 15)) {
    const formattedTime = format(time, 'h:mm aa');
    timeArray.push(formattedTime);
  }

  console.log(timeArray);

  console.log(format(new Date(), 'MM/dd/yyyy'));
  //=> '02/11/2014'

  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];
  dates.sort(compareAsc);
  //=> [
  //   Wed Feb 11 1987 00:00:00,
  //   Mon Jul 10 1989 00:00:00,
  //   Sun Jul 02 1995 00:00:00
  // ]
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
