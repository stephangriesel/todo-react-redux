import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title); // need to pass title up so using props
    this.setState({ title: ''}); // clear field
  }

  onChange = (e) =>
  this.setState({
    [e.target.name]: e.target.value  // demo react tools to show what happens when value changes when typing
  }
  );

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Your Todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          type="submit">
          Add
        </button>
      </form>
    )
  }
}

AddTodo.propTypes = { // https://reactjs.org/docs/typechecking-with-proptypes.html PropTypes is one of React’s most useful accessories. It provides clear, enduring assertions as to the type of data a React component needs to render properly.The tool is built-in and ready to use without wading through complicated set-up procedures. However, some developers bypass PropTypes because of the small amount of extra up-front coding required. That has the potential to be a serious mistake. PropTypes (and the variety of similar static type checking tools) is a valuable asset for building scalable, maintainable software.
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
