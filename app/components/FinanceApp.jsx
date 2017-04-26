import React from "react";
import * as Redux from "react-redux";

import moment from "moment";
const uuid = require("node-uuid");

import AddItem from "AddItem";
import Balance from "Balance";
import FilterItem from "FilterItem";
import ItemList from "ItemList";
import Login from "Login";
import * as actions from "actions";

class FinanceApp extends React.Component {
  handleLogout = e => {
    const { dispatch } = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  };

  render() {
    const { items, filterItemText, filterDates, auth } = this.props;

    const renderApp = () => {
      if (Object.keys(auth).length > 0 && auth.constructor === Object) {
        return (
          <div>
            <div className="row row-add-item box-material">
              <AddItem />
            </div>
            <div className="row row-filter box-material">
              <FilterItem />
            </div>
            <div className="row row-items box-material">
              <ItemList type={"expense"} />
              <ItemList type={"income"} />
            </div>
            <div className="row row-balance box-material">
              <Balance />
            </div>
          </div>
        );
      } else {
        return (
          <div className="row">
            <div className="columns small-centered medium-12 large-12">
              <Login onLogout={this.handleLogout} />
            </div>
          </div>
        );
      }
    };

    const renderLogout = () => {
      if (Object.keys(auth).length > 0 && auth.constructor === Object) {
        return <a className="p-logout" onClick={this.handleLogout}>Logout</a>;
      }
    };

    return (
      <div>
        {renderLogout()}
        <h1 className="text-center">React Finance App</h1>
        {renderApp()}
      </div>
    );
  }
}

export default Redux.connect(state => {
  return state;
})(FinanceApp);
