import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [time,setTime]=useState(0);
    const intervalRef=useRef(null);
    const [intervalRunning,setIntervalRunning]=useState(false);
    function start(){
        if(!intervalRunning){
            intervalRef.current=setInterval(()=>{
            setTime((time)=>time+1);
        },1000)
        setIntervalRunning(true);
        }
    }
    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }
    function reset(){
       clearInterval(intervalRef.current);
       intervalRef.current=null;
       setTime(0);
    }
    return (
        <div id="watch">
            <h1>{time}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);