import React, { Component } from 'react'

class EditTodo extends Component {
  // state = {
  //   edited: false
  // }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.state.title); // need to pass title up so using props
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
          placeholder="Edit Your Todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          type="submit">
          Edit2
        </button>
      </form>
    )
  }
}

export default EditTodo;
