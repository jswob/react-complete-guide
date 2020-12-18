import React, { useEffect, useRef, useContext } from "react";

// import styled from "styled-components";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

const cockpit = (props) => {
  const toggleBtnRef = useRef();
  const authContext = useContext(AuthContext);

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

  // const btnClass = {
  //   backgroundColor: "green",
  //   color: "white",
  //   font: "inherit",
  //   border: "1px solid blue",
  //   padding: "8px",
  //   cursor: "pointer",
  //   ":hover": {
  //     backgroundColor: "lightgreen",
  //     color: "black",
  //   },
  // };

  // if (props.showPersons) {
  //   btnClass.backgroundColor = "red";
  //   btnClass[":hover"] = {
  //     backgroundColor: "salmon",
  //     color: "black",
  //   };
  // }

  let assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = [classes.Button];

  if (props.showPersons) btnClass.push(classes.Red);

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass.join(" ")}
        alt={props.showPersons}
        ref={toggleBtnRef}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>

      <button
        className={classes.Button}
        alt={false}
        onClick={authContext.login}
      >
        Log in
      </button>
    </div>
  );
};

export default React.memo(cockpit);
