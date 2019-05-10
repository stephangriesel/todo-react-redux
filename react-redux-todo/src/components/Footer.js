import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <nav>
            <h1>Todo List</h1>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </nav>
      </div>
    )
  }
}

export default Footer;
