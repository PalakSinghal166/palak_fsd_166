import { useState } from "react";

function Greeting() {
  const [Message, setMessage] = useState("Hello Palak ");
  
  function changeMessages(){
    setMessage("You Clicked the button!")
  }

  return (
    <div>
      <h1>Hello, {name || "Guest"}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
  export default Greeting;
}