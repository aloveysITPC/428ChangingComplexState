import React, { useState } from "react";

function App() {
  // for morecomplex states can set the intitial value to an object
  const [fullName, getFullname] = useState({ firstName: "", lastName: "" });

  function enterFullName(event) {
    const newValue = event.target.value;
    // use the name property of the input box
    const inputName = event.target.name;
    console.log(inputName);
    console.log(newValue);
    // pass a function to a function - functional programming
    // Don't use events inside a setState function
    getFullname((prevValue) => {
      console.log(prevValue);
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName}
        {fullName.lastName}
      </h1>
      <form>
        {/* remember events for forms */}
        {/* controlled components because the value is set */}
        <input
          onChange={enterFullName}
          // have the property name
          name="fName"
          placeholder="First Name"
          // be sure to add value to the form
          // value={fullName.firstName}
        />
        <input
          onChange={enterFullName}
          name="lName"
          placeholder="Last Name"
          // value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
