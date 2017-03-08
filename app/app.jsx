var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import FinanceApp from 'FinanceApp';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

// Load foundation
$(document).foundation();

// Load app.css
require('style!css!sass!applicationStyles');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSFR9_lEHPM9-MkkJVN0ZXLeH7Cp29xmI",
    authDomain: "react-finance-redux-7b646.firebaseapp.com",
    databaseURL: "https://react-finance-redux-7b646.firebaseio.com",
    storageBucket: "react-finance-redux-7b646.appspot.com",
    messagingSenderId: "344359769731"
  };
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <FinanceApp/>
  </Provider>,
  document.getElementById('app')
);