import React from 'react';
import Item from 'Item';
import * as Redux from 'react-redux';
import {filterItems} from 'app/utils/';

var NumberFormat = require('react-number-format');

class ItemList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      totalValue: 0
    }
  }  

  render() {
    var {items, filterItemText, filterDates, type} = this.props;

    var title = type.charAt(0).toUpperCase() + type.slice(1) + 's';    

    var calculateTotalValue = (items) => {
      var totalValue = 0;
      for (var i=0; i < filteredItems.length; i++) {
        totalValue += Number(filteredItems[i].itemValue);
      }
      return totalValue;
    }

    var renderItems = (items) => {
      return filteredItems.map((item) => {
        return <Item key={item.id} {...item} />
      })
    }

    var filteredItems = filterItems(items, filterItemText, filterDates, type);
    // console.log(filterItems);

    return (
      <div className="medium-6 large-6 columns">
        <h4>{title}</h4>
        <table className="table-itemlist">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Value</th>
              <th>Remove</th>              
            </tr>
          </thead>
          <tbody>
            {renderItems(filteredItems)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total:</td>
              <td><NumberFormat value={parseFloat(calculateTotalValue(filteredItems)).toFixed(2)} displayType={'text'} decimalSeparator={true} thousandSeparator={true} prefix={'$'} /></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
};

export default Redux.connect(
  (state) => {
    return state;
  }
)(ItemList);