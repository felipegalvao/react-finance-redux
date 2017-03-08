var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var store = require('configureStore').configure();
import FinanceApp from 'FinanceApp';
import firebase from 'app/firebase/';

var actions = require('actions');
var store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));    
  } else {
    store.dispatch(actions.logout());    
  }
});

// Load foundation
$(document).foundation();

// Load app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <FinanceApp/>
  </Provider>,
  document.getElementById('app')
);