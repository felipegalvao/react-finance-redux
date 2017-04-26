const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
const { Route, Router, IndexRoute, hashHistory } = require("react-router");

const store = require("configureStore").configure();
import FinanceApp from "FinanceApp";
import firebase from "app/firebase/";

const actions = require("actions");
const store = require("configureStore").configure();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddItems());
  } else {
    store.dispatch(actions.logout());
  }
});

// Load foundation
$(document).foundation();

// Load app.css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <FinanceApp />
  </Provider>,
  document.getElementById("app")
);
