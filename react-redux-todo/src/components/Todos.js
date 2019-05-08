import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => ( // map high order array method, return array from array. todo is my placeholder, can be anything. arrow method used.
      // <h3>{ todo.title }</h3> // todo is the object and title is the property being passed
      <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}

Todos.PropTypes = { // https://reactjs.org/docs/typechecking-with-proptypes.html
  todos: PropTypes.array.isRequired
}

export default Todos;
