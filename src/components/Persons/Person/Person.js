import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log("   [Person.js] render");

    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} yaers old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, "Person");
