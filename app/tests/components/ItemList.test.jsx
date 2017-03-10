import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
import $ from 'jquery';

import {configure} from 'configureStore';
import ConnectedItemList, {ItemList} from 'ItemList';
import ConnectedItem, {Item} from 'Item';

describe('ItemList', () => {
  it('should exist', () => {
    expect(ItemList).toExist();
  })

  it('should render one Item component for each item', () => {
    var items = [{
        userId: 'abc123',
        itemDescription: 'test item 1',
        itemValue: 50.50,
        itemDate: 1487548800000,
        itemType: 'expense'
      },
      {
        userId: 'abc123',
        itemDescription: 'test item 2',
        itemValue: 100,
        itemDate: 1499999900000,
        itemType: 'expense'
      }]

      var store = configure({
        items
      });

      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedItemList type={"expense"}/>
        </Provider>
      )      

      var itemList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedItemList)[0];
      var itemComponents = TestUtils.scryRenderedComponentsWithType(itemList, ConnectedItem);   

      expect(itemComponents.length).toEqual(items.length);
  })

  it('should render a table with no item rows if no items', () => {
    var items = [];
    var totalValue = 0;
    var itemList = TestUtils.renderIntoDocument(<ItemList items={items} title={"Expenses"} totalValue={totalValue} />);

    var $el = $(ReactDOM.findDOMNode(itemList));
    var itemRows = $el.find('tbody tr');

    expect(itemRows.length).toEqual(0);
  })
})