import React from "react";

import "./Person.css";

const person = (props) => {
  const rnd = Math.random();

  if (rnd < 0.1) {
    throw new Error("Something went wrong");
  }

  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} yaers old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default person;
