import React from 'react';
import moment from 'moment';
var {connect} = require('react-redux');
var actions = require('actions');

var NumberFormat = require('react-number-format');

export class Item extends React.Component{
  // An item can be an income or an expense
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (id, itemDescription) {
    var {id, itemDescription, dispatch, auth} = this.props;
    var confirmation = confirm('Are you sure you want to delete "' + itemDescription + '"?');
    if (confirmation) {
      dispatch(actions.startDeleteItem(id, itemDescription));
    }     
  }

  render() {
    var {id, itemDescription, itemValue, itemDate, dispatch} = this.props;

    return (
      <tr>
        <td>{moment.unix(itemDate).utc().format('DD/MM/YYYY')}</td>
        <td>{itemDescription}</td>
        <td><NumberFormat value={parseFloat(itemValue).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
        <td onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></td>
      </tr>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Item);