import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

  getStyle = () => { // Functional component to add strikethrough if todo has been completed
    return {
      background: '#777777',
      padding: '12px',
      borderBottom: '1px #979797 solid',
      textDecoration: this.props.todo.completed ? // The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo; // destructuring to pull out properties
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)} /> {/*
          ^^^ can also bind this but using arrow function in app.js.
          ^^^ passing ID up to todos.js & then app.js
          */}
          {title}
          <button
            className="delete-btn"
            onClick={this.props.deleteTodo.bind(this, id)}>
            X
          </button>
          <button
            className="edit-btn"
            onClick={this.props.editTodo.bind(this, id)}>
            EDIT
          </button>


        </p>
      </div>
    )
  }
}

TodoItem.propTypes = { // https://reactjs.org/docs/typechecking-with-proptypes.html PropTypes is one of React’s most useful accessories. It provides clear, enduring assertions as to the type of data a React component needs to render properly.The tool is built-in and ready to use without wading through complicated set-up procedures. However, some developers bypass PropTypes because of the small amount of extra up-front coding required. That has the potential to be a serious mistake. PropTypes (and the variety of similar static type checking tools) is a valuable asset for building scalable, maintainable software.
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
