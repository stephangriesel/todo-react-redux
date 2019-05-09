import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <React.Fragment>
      <h1>Todo List</h1>
      <Link to="/">Home</Link>
      <Link to="/notes">Notes</Link>
      </React.Fragment>
    )
  }
}

export default Header;