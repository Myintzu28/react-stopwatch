import React,{useEffect, useState} from 'react';
import './App.css';


function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect (() => {
    let interval;
    if(running){
      interval = setInterval(()=> {
        setTime((prevTime)=> prevTime + 10);
      }, 10);
    } else if (!running){
      clearInterval (interval);
    }
     return () => clearInterval(interval);
  })
  return (
    <div className="stopwatch-container">
      <h1>React StopWatch</h1>
       <div className="stopwatch-timer">
         <span>{("0" + Math.floor((time/6000) % 60)).slice(-2)} : </span>
         <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)} : </span>
         <span>{("0" + ((time/10) % 100)).slice(-2)} </span>
       </div>
       <div className="stopwatch-buttons">
       { running ? (
         <button  className="stopwatch-button" onClick={()=> {setRunning(false)}}>Stop</button>
       ): (
         <button className="stopwatch-button" onClick={() => {setRunning(true)}}>Start</button>
       )

       }
       <button className="stopwatch-button" onClick={() => {setTime(0)}}>Reset</button>
       </div>
       
    </div>
  );
}

export default App;
