import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux
// import {createStore} from 'redux';
// import todoReducer from './reducers/todoReducer';

// let initialState = {
//   todos: []
// };

// const store = createStore(todoReducer, initialState);

ReactDOM.render(
  <App />,
  // <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
