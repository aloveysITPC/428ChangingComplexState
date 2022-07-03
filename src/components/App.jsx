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
        {/* remember events for forms */}
        <input
          onChange={enterFname}
          name="fName"
          placeholder="First Name"
          // be sure to add value to the form
          value={firstName}
        />
        <input
          onChange={enterLname}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
