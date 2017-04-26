import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
const TestUtils = require("react-addons-test-utils");
import $ from "jquery";

import { Item } from "Item";
import * as actions from "actions";

describe("Item", () => {
  it("should exist", () => {
    expect(Item).toExist();
  });

  // it('should dispatch DELETE_ITEM with item id and description on delete icon click', () => {
  //   var itemData = {
  //     id: 'abc123',
  //     itemDescription: 'test item',
  //     itemValue: 50.50,
  //     itemDate: 1487548800000,
  //     itemType: 'expense'
  //   };
  //   var action = actions.deleteItem(itemData.id, itemData.itemDescription);

  //   var spy = expect.createSpy();
  //   var item = TestUtils.renderIntoDocument(<Item key={itemData.id} {...itemData} dispatch={spy} />)
  //   var $el = $(ReactDOM.findDOMNode(item))

  //   TestUtils.Simulate.click($el.find('i')[0]);

  //   console.info(spy.calls[0].arguments);

  //   expect(spy).toHaveBeenCalledWith(action);
  // })
});
