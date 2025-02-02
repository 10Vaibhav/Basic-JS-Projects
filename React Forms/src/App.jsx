import React, { useState } from "react";
import "../public/styles.css"

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHowerd, setIsHowerd] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeadingText(`Submited as ${name}`);

    event.preventDefault();
  }

  function handleHower() {
    setIsHowerd(true);
  }

  function handleMouseOut() {
    setIsHowerd(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isHowerd ? "black" : "white" }}
          onMouseOver={handleHower}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
