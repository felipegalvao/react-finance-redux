import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
const { Provider } = require("react-redux");
const TestUtils = require("react-addons-test-utils");
import $ from "jquery";

import { configure } from "configureStore";
import ConnectedItemList, { ItemList } from "ItemList";
import ConnectedItem, { Item } from "Item";

describe("ItemList", () => {
  it("should exist", () => {
    expect(ItemList).toExist();
  });

  it("should render one Item component for each item", () => {
    const items = [
      {
        userId: "abc123",
        itemDescription: "test item 1",
        itemValue: 50.50,
        itemDate: 1487548800000,
        itemType: "expense"
      },
      {
        userId: "abc123",
        itemDescription: "test item 2",
        itemValue: 100,
        itemDate: 1499999900000,
        itemType: "expense"
      }
    ];

    const store = configure({
      items
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedItemList type={"expense"} />
      </Provider>
    );

    const itemList = TestUtils.scryRenderedComponentsWithType(
      provider,
      ConnectedItemList
    )[0];
    const itemComponents = TestUtils.scryRenderedComponentsWithType(
      itemList,
      ConnectedItem
    );

    expect(itemComponents.length).toEqual(items.length);
  });

  it("should render a table with no item rows if no items", () => {
    const items = [];
    const totalValue = 0;
    const itemList = TestUtils.renderIntoDocument(
      <ItemList items={items} title={"Expenses"} totalValue={totalValue} />
    );

    const $el = $(ReactDOM.findDOMNode(itemList));
    const itemRows = $el.find("tbody tr");

    expect(itemRows.length).toEqual(0);
  });
});
