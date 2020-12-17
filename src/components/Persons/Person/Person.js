import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./Person.css";
import styled from "styled-components";

import AuthContext from "../../../context/auth-context";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

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

    return (
      // <div className="Person" style={style}>
      <StyledDiv>
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
      </StyledDiv>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
