import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
 constructor(props) {
   super(props);
  this.state = {
    isShowing: false,
  }
  this.formRef = React.createRef()
}
  getStyle = () => { // Functional component to add strikethrough if todo has been completed
    return {
      textDecoration: this.props.todo.completed ? // The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        'line-through' : 'none'
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const title = this.formRef.current['title'].value
    const { id } = this.props.todo

    this.props.editTodo(id, title)
  }

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  showEditTodoForm = () => {
    const { title} = this.props.todo

    if(this.state.isShowing) {
      return(
        <div id="card-item-edit">
          <form
            ref={this.formRef}
            onSubmit={this.handleFormSubmit}>
          <input
              type="text"
              name="title"
              defaultValue={title}
            />
            <button
              className="save-btn"
              type="submit">
              <i className="far fa-save"></i>
              </button>
          </form>
        </div>
      )
    }
  }

  onChange = (e) =>
  this.setState({
    [e.target.name]: e.target.value  // demo react tools to show what happens when value changes when typing
  }
  );

  render() {
    const { id, title } = this.props.todo; // destructuring to pull out properties // CHANGE , completed, editTodo
    return (
      <div id="card-item" style={this.getStyle()}>
        <div id="card-item-details">
          <p>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)} /> {/* ^^^ can also bind this but using arrow function in app.js.^^^ passing ID up to todos.js & then app.js */}
            {title}
            <button
              className="delete-btn"
              onClick={this.props.deleteTodo.bind(this, id)}>
              <i className="far fa-trash-alt"></i>
          </button>
          </p>
        </div>
        <div id="card-item-edit">
          <button
          className="edit-btn"
          onClick={() => this.toggleForm()}>
          <i className="far fa-edit"></i>
          </button>
          {this.showEditTodoForm()}
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = { // https://reactjs.org/docs/typechecking-with-proptypes.html PropTypes is one of React’s most useful accessories. It provides clear, enduring assertions as to the type of data a React component needs to render properly.The tool is built-in and ready to use without wading through complicated set-up procedures. However, some developers bypass PropTypes because of the small amount of extra up-front coding required. That has the potential to be a serious mistake. PropTypes (and the variety of similar static type checking tools) is a valuable asset for building scalable, maintainable software.
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoItem
