import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <React.Fragment>
          <nav>
          <h1>Todo List</h1>
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
          </nav>
        </React.Fragment>
      </header>
    )
  }
}

export default Header;