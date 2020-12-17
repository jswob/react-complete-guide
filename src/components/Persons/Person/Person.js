import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import Radium, { StyleRoot } from "radium";

import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("   [Person.js] render");

    const style = {
      "@media (min-width: 500px)": {
        width: "450px",
      },
    };

    return (
      <div className="Person" style={style}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} yaers old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Radium(Person);
