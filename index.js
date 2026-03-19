import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [time,setTime]=useState(0);
    function start(){
        setInterval(()=>setTime(time+1));
    }
    function stop(){

    }
    function reset(){

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