import React, { useState } from "react";

function App() {
  //  can  two separate constants and converting them to a single constant
  //  where the constants is a JavaScript Object.

  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // for morecomplex states can set the intitial value to an object
  const [fullName, setFullname] = useState({ fName: "", lName: "" });

  // function enterFullName takes a parameter "event" as it is called when the onChange event happens
  function handleChange(event) {
    // this assumes we have a value attribute (prop) for the input element
    const { value, name } = event.target;

    // const newValue = event.target.value;
    // // use the name attribute value of the input box
    // const inputName = event.target.name;
    // console.log(inputName);
    // console.log(newValue);

    // pass a function to a function - functional programming
    // Don't use events inside a setState function
    // pass a function as a parameter calle it prevValue
    // react remembers the previous value of an object
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {/* fetch variable fullName and the values firstName and lastName */}
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        {/* remember events for forms */}
        {/* controlled components because the value is set */}
        <input
          onChange={handleChange}
          // have the property name
          name="fName"
          placeholder="First Name"
          // be sure to add value to the form
          value={fullName.fName}
        />
        <input
          // the onChange prop of the input element calls a function  - it gets hold of the event (onChange as a property of the input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
