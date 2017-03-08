import React from 'react';
import moment from 'moment';
var {connect} = require('react-redux');
var actions = require('actions');

var NumberFormat = require('react-number-format');

class Item extends React.Component{
  // An item can be an income or an expense
  constructor(props) {
    super(props);
  }

  render() {
    var {id, itemDescription, itemValue, itemDate, dispatch} = this.props;

    return (
      <tr>
        <td>{moment.unix(itemDate).utc().format('DD/MM/YYYY')}</td>
        <td>{itemDescription}</td>
        <td><NumberFormat value={parseFloat(itemValue).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
        <td onClick={() => {dispatch(actions.deleteItem(id, itemDescription))}}><i className="fa fa-trash" aria-hidden="true"></i></td>
      </tr>
    )
  }
};

export default connect()(Item);