import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => ( // map high order array method, return array from array. todo is my placeholder, can be anything. arrow method used.
      // <h3>{ todo.title }</h3> // todo is the object and title is the property being passed
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
        editTodo={this.props.editTodo}
        />
    ));
  }
}

Todos.propTypes = { // https://reactjs.org/docs/typechecking-with-proptypes.html PropTypes is one of React’s most useful accessories. It provides clear, enduring assertions as to the type of data a React component needs to render properly.The tool is built-in and ready to use without wading through complicated set-up procedures. However, some developers bypass PropTypes because of the small amount of extra up-front coding required. That has the potential to be a serious mistake. PropTypes (and the variety of similar static type checking tools) is a valuable asset for building scalable, maintainable software.
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;
