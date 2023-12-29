import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const Attendance = () => {
  const isSmallScreen = useMediaQuery('(max-width:465px)');

  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInMonthArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const startDayIndex = new Date(year, month - 1, 1).getDay();

  const decreaseMonth = () => {
    setMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
    setYear((prevYear) => (month === 1 ? prevYear - 1 : prevYear));
  }
  const increaseMonth = () => {
    setMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
    setYear((prevYear) => (month === 12 ? prevYear + 1 : prevYear));
  }

  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <header className="hd-p">Attendance</header>
        <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Seamless attendance tracking for you.</span>

        <div className="flex justify-between items-center md:p-10 sm:p-8 xss:p-4 border-2 mt-10 rounded-t-lg">
          <IconButton className="xs:h-12 xs:w-12 h-6 w-6" type='button' onClick={decreaseMonth}>
            <ArrowBackIosNewIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
          </IconButton>
          <h2 className="hd-s">{monthNames[month - 1]} {year}</h2>
          <IconButton className="xs:h-12 xs:w-12 h-6 w-6" type='button' onClick={increaseMonth}>
            <ArrowForwardIosIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
          </IconButton>
        </div>

        <div className="overflow-x-auto pb-5">
          <table className="table-auto" style={{ tableLayout: 'fixed', minWidth: '950px', width: '100%' }}>
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th key={index} className="lb-p text-base sm:text-xl border-b-2 border-x-2 p-3 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil((startDayIndex + daysInMonthArray.length) / 7) }).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 7 }).map((_, colIndex) => {
                    const dayIndex = rowIndex * 7 + colIndex - startDayIndex + 1;
                    const isDayValid = dayIndex > 0 && dayIndex <= daysInMonthArray.length;
                    const absentDays = [1, 5, 23]

                    return (

                      <td key={colIndex}
                        className={`text-base sm:text-xl border-b-2 border-x-2 p-3 text-center ${isDayValid ? absentDays.includes(dayIndex) ? 'bg-red-200' : 'bg-green-100' : ''}`}
                        style={{ width: 'calc(100% / 7)' }}
                      >
                        {isDayValid ? dayIndex : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>







        </div>

      </main>

    </>

  );
};

export default Attendance;
