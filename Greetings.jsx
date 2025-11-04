import { useState } from "react";   
function Greetings() {
    const[message, setMessage] = useState("hello class!");
    function changeMessage() {
        setMessage("You clicked the button!");
    }
    return (
        <div>
            <h2>{message}</h2>
            <button onClick={changeMessage}>Click Me</button>
        </div>
    );
}
export default Greetings;   