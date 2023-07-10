import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';
import { BsPlay, BsStop } from 'react-icons/bs';
import user from '../images/user.png'

function Stopwatch(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const previousTimeRef = useRef(0);

  useEffect(() => {
    if (props.lastDuration) {
      const previousDurationArray = props.lastDuration.split(':');
      setHours(parseInt(previousDurationArray[0]));
      setMinutes(parseInt(previousDurationArray[1]));
      setSeconds(parseInt(previousDurationArray[2]));
      previousTimeRef.current =
        (parseInt(previousDurationArray[0]) * 3600 +
          parseInt(previousDurationArray[1]) * 60 +
          parseInt(previousDurationArray[2])) *
        1000;
    }
  }, [props.lastDuration]);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      previousTimeRef.current += 1000;
      const totalSeconds = previousTimeRef.current / 1000;
      setSeconds(Math.floor(totalSeconds % 60));
      setMinutes(Math.floor((totalSeconds / 60) % 60));
      setHours(Math.floor(totalSeconds / 3600));
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    const duration = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    props.addTask(document.querySelector('.todo-input').value, duration);
    previousTimeRef.current = 0;
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className='stopwatch-container'>
      <div className='time-display'>
        <h5>
          {hours.toString().padStart(2, '0')}:{minutes
            .toString()
            .padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </h5>
      </div>
      <div className='button-container'>
        <button className='ssb' onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? <img src={user} alt='' width="40px" height="40px" style={{ borderRadius: "70%" }} /> :<img src={user} alt='' width="40px" height="40px" style={{ borderRadius: "70%" }} /> }
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
