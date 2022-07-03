import React, { useState } from "react";

function App() {
  const [firstName, getFname] = useState("");
  const [lastName, getLname] = useState("");

  function enterFname(event) {
    getFname(event.target.value);
  }
  function enterLname(event) {
    getLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
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
