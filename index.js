import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [time,setTime]=useState(0);
    return (
        <div id="watch">
            <h1>{time}</h1>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);