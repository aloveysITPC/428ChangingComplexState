import React, { useState } from "react";

function App() {
  const [fName, getFname] = useState("");
  const [lName, getLname] = useState("");

  function enterFname() {
    getFname({ fName });
  }
  function enterLname() {
    getLname({ lName });
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}{" "}
      </h1>
      <form>
        <input onChange={enterFname} name="fName" placeholder="First Name" />
        <input onChange={enterLname} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
