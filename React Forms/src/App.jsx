import React, { useState } from "react";
import "../public/styles.css"

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHowerd, setIsHowerd] = useState(false);
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Email, setEmail] = useState("");

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

  function handleChangeEmail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  // Optimize Function
  // function handleChange(event){
  //   const newValue = event.target.value;
  //   const inputName = event.target.name;

  //   if(inputName === "FName"){
  //     setFName(newValue);
  //   }else{
  //     setLName(newValue);
  //   }
  // }


  return (
    <div className="container">
      <h1>{headingText} {Fname} {Lname}</h1>
      <p>{Email}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeFName}
          type="text"
          placeholder="First name"
          name = "FName"
          value={Fname}
        />

        <input
          onChange={handleChangeLName}
          type="text"
          placeholder="Last name"
          name = "LName"
          value={Lname}
        />


        <input
          onChange={handleChangeEmail}
          type="text"
          placeholder="Email"
          name = "Email"
          value={Email}
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
