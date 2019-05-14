import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './css/main.css';

// Redux << Leaving this here for Redux reference
import { Provider } from 'react-redux';
import store from './store'


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    console.log('Todos component did indeed mount...')
    axios.get('http://localhost:3004/todos')
    .then(res => this.setState({ todos: res.data }));
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

  editTodo = (id, title) => {
    console.log("Edit Todo:" + title)
    axios.put(`http://localhost:3004/todos/${id}`,
      {
        title,
      },
    )
      .then(({data}) => {
        this.setState(prevState => {
          const { todos } = prevState;
          const oldTodoIndex = todos.findIndex(todo => todo.id === data.id )
          const newTodo = {...todos[oldTodoIndex], ...data}
          todos.splice(oldTodoIndex, 1, newTodo)

          return {todos: todos}
        })

      })
      .catch(error => console.log(error))
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
  }


  render() {
    // console.log(this.state.todos);
    return (
      <Provider store={store}> {/* Leaving this here for Redux reference */}
      <Router>
        <div className="App">
          <main className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <section id="primary">
                <AddTodo
                  addTodo={this.addTodo}
                />
                </section>
                <section id="card">
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                />
                </section>
              </React.Fragment>
            )} />

          </main>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;