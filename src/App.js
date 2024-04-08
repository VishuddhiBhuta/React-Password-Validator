import { React, useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [error, setError] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      return setError("It is a Strong Password");
    } else {
      return setError("It is a Weak Password");
    }
  };

  return (
    <div className="wrapper">
      <h2>Checking Password Strength in ReactJS</h2>
      <input type="text" onChange={(e) => validate(e.target.value)} />
      <p class="message">{error === "" ? null : error}</p>
    </div>
  );
}

export default App;
