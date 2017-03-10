import React from 'react';
import moment from 'moment';
var uuid = require('node-uuid');
var {connect} = require('react-redux');

import * as actions from 'actions';

export class AddItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var itemDescription = this.refs.itemDescription.value;
    var itemValue = this.refs.itemValue.value;    
    var itemDate = moment(this.refs.itemDate.valueAsDate).utc().unix();    
    if (itemDescription && itemValue && itemDate) {
      this.refs.itemDescription.value = '';
      this.refs.itemValue.value = '';
      this.refs.itemDate.value = '';
      if (this.refs.expense.checked) {
        var itemType = 'expense';
      } else if (this.refs.income.checked) {
        var itemType = 'income';
      }
      var item = {        
        itemDescription: itemDescription,
        itemValue: itemValue,
        itemDate: itemDate,
        itemType: itemType
      };      
      dispatch(actions.startAddItem(item));
      this.refs.itemDescription.focus();
    }    
  }

  render() {
    return (
      <div className="medium-12 large-12 columns">
        <h4>Add New income / expense</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="medium-4 large-4 columns">
              <label>Description<input type="text" required ref="itemDescription" placeholder="Insert an income / expense here"/></label>
            </div>
            <div className="medium-2 large-2 columns">
              <label>Value<input type="number" required step="0.01" ref="itemValue" placeholder="Insert value here"/></label>
            </div>
            <div className="medium-2 large-2 columns">
              <label>Date<input type="date" required ref="itemDate" id="itemDate" placeholder="Insert the date when the income / expense occurred"/></label>
            </div>
            <div className="medium-2 large-2 columns column-radio-button">              
              <label><input type="radio" name="type" ref="expense" value="expense" defaultChecked /> Expense</label>
            </div>
            <div className="medium-2 large-2 columns column-radio-button">              
              <label><input type="radio" name="type" ref="income" value="income" /> Income</label>
            </div>
          </div>
          <div className="row">
            <div className="medium-2 large-2 columns">
              <input type="submit" value="Register Income / Expense" className="button button-add-item" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddItem);