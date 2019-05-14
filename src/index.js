import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux: << Leaving this here for Redux reference
// import {createStore} from 'redux';
// import todoReducer from './reducers/todoReducer';

// let initialState = {
//   todos: []
// };

// const store = createStore(todoReducer, initialState);

ReactDOM.render(
  <App />,
  // Redux: << Leaving this here for Redux reference
  // <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
