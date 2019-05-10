import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Notes from './components/pages/Notes';
import './css/main.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://localhost:3004/todos')
    .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`http://localhost:3004/todos/${id}`)
    .then(res => this.setState({
      todos: [
        ...this.state.todos.filter(todo => // ... spread (copy) operator: The spread operator allows an iterable to spread or expand individually inside a receiver. Iterables are anything that can be looped over such as strings, arrays, and sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          todo.id !== id // return id not equal to id passed in
        )]
    }));
  }

  // editTodo = (id) => {
  //   console.log("Edit Todo:" + id)
  //   axios.put(`http://localhost:3004/todos/${id}`)
  //   .then(res => this.setState({
  //     todos: [
  //       ...this.state.todos.filter(todo => // ... spread (copy) operator: The spread operator allows an iterable to spread or expand individually inside a receiver. Iterables are anything that can be looped over such as strings, arrays, and sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  //         todo.id !== id // return id not equal to id passed in
  //       )]
  //   }));
  // }

  addTodo = (title) => {
    console.log("Add todo:" + title)
    axios.post('http://localhost:3004/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({
      todos: [
        ...this.state.todos, res.data // spread (copy) what is in array & add in new todo
      ]
    }));
    // const newTodo = { << TESTS before adding backend server
    //   id: uuid.v4(),
    //   title: title, // es6 i can just use title but keeping this as is for reference for now
    //   completed: false
    // }
  }


  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <div id="primary">
                <AddTodo
                  addTodo={this.addTodo}
                />
                </div>
                <div id="card">
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
                </div>
              </React.Fragment>
            )} />
            <Route path="/notes" component={Notes} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// Some notes: My todo's are app level states (change to redux). The states in components are component level states
