import React from 'react';
import * as Redux from 'react-redux';

import moment from 'moment';
var uuid = require('node-uuid');

import AddItem from 'AddItem';
import Balance from 'Balance';
import FilterItem from 'FilterItem';
import ItemList from 'ItemList';
import Login from 'Login';
import * as actions from 'actions';

class FinanceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],      
      filterItemText: '',
      filterDates: {
        dateFrom: null,
        dateTo: null
      },
      auth: {}
    };
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilterByText = this.handleFilterByText.bind(this);
    this.handleFilterByDate = this.handleFilterByDate.bind(this);    
    this.handleLogout = this.handleLogout.bind(this);
  }  

  handleDelete (id, itemDescription) {
    var confirmation = confirm('Are you sure you want to delete "' + itemDescription + '"?');
    if (confirmation) {      
      var uid = this.state.auth.uid;      
      firebase.database().ref('users/' + uid + '/items/' + id).remove();
    }     
  }

  handleFilterByText (filterItemText) {
    this.setState({
      filterItemText
    })
  }

  handleFilterByDate (dateFrom, dateTo) {
    if (isNaN(dateFrom) || isNaN(dateTo)) {
      this.setState({
        filterDates: {
          dateFrom: null,
          dateTo: null
        }        
      })
    } else {
      this.setState({
        filterDates: {
          dateFrom: dateFrom,
          dateTo: dateTo
        }        
      })
    }    
  }  

  handleLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());    
  }

  render() {
    var {items, filterItemText, filterDates, auth} = this.props;

    // Filter Items By Text
    if (filterItemText === '') {
      var filteredItems = items;
    } else {
      var filteredItems = items.filter((item) => {
        var itemDescription = item.itemDescription.toLowerCase();
        return filterItemText.length === 0 || itemDescription.indexOf(filterItemText.toLowerCase()) > -1;        
      })
    }

    // Filter Items By Date
    if (filterDates.dateFrom === null && filterDates.dateTo === null) {
      var filteredItems = filteredItems;
    } else {
      var filteredItems = filteredItems.filter((item) => {
        var itemDate = item.itemDate;
        return itemDate >= filterDates.dateFrom && itemDate <= filterDates.dateTo;
      })
    }

    var expenses = filteredItems.filter((item) => {
      return item.itemType === 'expense';
    })

    var incomes = filteredItems.filter((item) => {
      return item.itemType === 'income';
    })

    var expenseTotal = 0;
    var incomeTotal = 0;

    // Calculate total of expenses and incomes
    for (var i=0; i < expenses.length; i++) {
      expenseTotal += Number(expenses[i].itemValue);
    }

    for (var i=0; i < incomes.length; i++) {
      incomeTotal += Number(incomes[i].itemValue);
    }

    var renderApp = () => {      
      if (Object.keys(auth).length > 0 && auth.constructor === Object) {
        return (
          <div>
            <div className="row row-add-item box-material">
              <AddItem/>              
            </div>
            <div className="row row-filter box-material">              
              <FilterItem onFilterByText={this.handleFilterByText} onFilterByDate={this.handleFilterByDate} />              
            </div>
            <div className="row row-items box-material">              
              <ItemList type={"expense"} />
              <ItemList type={"income"} />
            </div>
            <div className="row row-balance box-material">              
              <Balance expenseTotal={expenseTotal} incomeTotal={incomeTotal} />              
            </div>
          </div>
        )
      } else {
        return (
          <div className="row">
            <div className="columns small-centered medium-12 large-12">              
              <Login onLogout={ this.handleLogout }/>
            </div>
          </div>
        )
      }        
    }

    var renderLogout = () => {
      if (Object.keys(auth).length > 0 && auth.constructor === Object) {
        return <a className="p-logout" onClick={this.handleLogout}>Logout</a>
      }
    } 

    return (
      <div>
        {renderLogout()}
        <h1 className="text-center">React Finance App</h1>
        {renderApp()}
      </div>
    )
  }
}

export default Redux.connect(
  (state) => {
    return state;
  }
)(FinanceApp);