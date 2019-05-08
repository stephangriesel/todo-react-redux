import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import EditTodo from './components/EditTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Create react app',
        completed: false,
        edit: false
      },
      {
        id: uuid.v4(),
        title: 'Redux it',
        completed: true,
        edit: false
      },
      {
        id: uuid.v4(),
        title: 'Style it',
        completed: false,
        edit: false
      },
      {
        id: uuid.v4(),
        title: 'Test it',
        completed: false,
        edit: false
      }
    ]
  }

  markComplete = (id) => {
    console.log("Mark Complete:" + id)
    this.setState({
      todos: this.state.todos.map(todo => { // state is object, property inside is what i am working with. using map to loop over these items
        if (todo.id === id) { // check if id matches the id being passed with the function
          todo.completed = !todo.completed // toggle thus ! not, if just true then it will stay true. demo this in react tools.
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    console.log("Delete Todo:" + id)
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => // ... spread (copy) operator: The spread operator allows an iterable to spread or expand individually inside a receiver. Iterables are anything that can be looped over such as strings, arrays, and sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          todo.id !== id // return id not equal to id passed in
        )]
    });
  }

  addTodo = (title) => {
    console.log("Add todo:" + title)
    const newTodo = {
      id:uuid.v4(),
      title:title, // es6 i can just use title but keeping this as is for reference for now
      completed: false
    }
    this.setState({ todos: [
      ...this.state.todos, newTodo // spread (copy) what is in array & add in new todo
    ]
  });
  }

  editTodo = (title) => {
    console.log("Edit todo:" + title)
    const editTodo = {
      id:uuid.v4(),
      title:title, // es6 i can just use title but keeping this as is for reference for now
      completed: false
    }
    this.setState({ todos: [
      ...this.state.todos, editTodo // spread (copy) what is in array & add in new todo
    ]
  });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo
            addTodo={this.addTodo}
          />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

// Some notes: My todo's are app level states (change to redux). The states in components are component level states
