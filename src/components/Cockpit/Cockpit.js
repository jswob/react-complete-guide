import React, { useEffect, useRef } from "react";

import "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef();
  toggleBtnRef;

  useEffect(() => {
    console.log(" [Cockpit.js] useEffect");

    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);

    toggleBtnRef.current.click();
    return () => {
      console.log(" [Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log(" [Cockpit.js] 2nd useEffect");

    return () => {
      console.log(" [Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const btnClass = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  if (props.showPersons) {
    btnClass.backgroundColor = "red";
    btnClass[":hover"] = {
      backgroundColor: "salmon",
      color: "black",
    };
  }

  let assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push("red");
  }

  if (props.personsLength <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} style={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
