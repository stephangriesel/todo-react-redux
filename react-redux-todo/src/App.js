import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Create react app',
        completed: false,
      },
      {
        id: 2,
        title: 'Redux it',
        completed: true,
      },
      {
        id: 3,
        title: 'Style it',
        completed: false,
      },
      {
        id: 4,
        title: 'Test it',
        completed: false,
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
    console.log(title)
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
          />
        </div>
      </div>
    );
  }
}

export default App;

// Some notes: My todo's are app level states (change to redux). The states in components are component level states
