import React, { useState } from "react";
import "../public/styles.css"

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHowerd, setIsHowerd] = useState(false);
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");

  function handleClick(event) {
    setHeadingText(`Submitted as `);

    event.preventDefault();
  }

  function handleHower() {
    setIsHowerd(true);
  }

  function handleMouseOut() {
    setIsHowerd(false);
  }

  function handleChangeFName(event) {
    console.log(event.target.value);
    setFName(event.target.value);
  }

  function handleChangeLName(event) {
    console.log(event.target.value);
    setLName(event.target.value);
  }


  return (
    <div className="container">
      <h1>{headingText} {Fname} {Lname}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeFName}
          type="text"
          placeholder="What's your First name?"
          value={Fname}
        />

        <input
          onChange={handleChangeLName}
          type="text"
          placeholder="What's your Last name?"
          value={Lname}
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
