import React, { Component } from 'react'

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

export default AddTodo;
