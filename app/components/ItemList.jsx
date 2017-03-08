import React from 'react';
import Item from 'Item';
var {connect} = require('react-redux');

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

    var filterItems = (items) => {
      // Filter items by Text
      if (filterItemText === '') {
        var filteredItems = items;
      } else {
        var filteredItems = items.filter((item) => {
          var itemDescription = item.itemDescription.toLowerCase();
          return filterItemText.length === 0 || itemDescription.indexOf(filterItemText.toLowerCase()) > -1;        
        })
      }
      
      // Filter Items By Date
      if (filterDates.dateFrom && filterDates.dateTo) {
        var filteredItems = filteredItems.filter((item) => {
          var itemDate = item.itemDate;
          return itemDate >= filterDates.dateFrom && itemDate <= filterDates.dateTo;
        })
      } else {
        var filteredItems = filteredItems;        
      }

      // Filter items by type
      var filteredItems = filteredItems.filter((item) => {
        return item.itemType === type;
      })

      return filteredItems;
    }

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

    return (
      <div className="medium-6 large-6 columns">
        <h4>{type}</h4>
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

export default connect(
  (state) => {
    return state;
  }
)(ItemList);