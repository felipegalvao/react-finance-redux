import expect from "expect";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
const TestUtils = require("react-addons-test-utils");
import $ from "jquery";

import { FilterItem } from "FilterItem";
import * as actions from "actions";

describe("FilterItem", () => {
  it("should exist", () => {
    expect(FilterItem).toExist();
  });

  it("should dispatch SET_FILTER_ITEM_TEXT when text is inputed", () => {
    const filterItemText = "food";
    const action = actions.setFilterItemText(filterItemText);
    const spy = expect.createSpy();
    const filterItem = TestUtils.renderIntoDocument(
      <FilterItem dispatch={spy} />
    );
    const $el = $(ReactDOM.findDOMNode(filterItem));
    filterItem.setState({ filterVisible: true });

    filterItem.refs.filterItemText.value = filterItemText;
    TestUtils.Simulate.change(filterItem.refs.filterItemText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  // it('should dispatch SET_FILTER_ITEM_DATES when dates are provided', () => {
  //   const dateFrom = "2017-03-08";
  //   const dateTo = "2017-03-10";
  //   const action = actions.setFilterItemDates(moment(dateFrom).unix(), moment(dateTo).unix())
  //   const spy = expect.createSpy();
  //   const filterItem = TestUtils.renderIntoDocument(<FilterItem dispatch={spy}/>);
  //   filterItem.setState({filterVisible: true});
  //   const $el = $(ReactDOM.findDOMNode(filterItem));

  //   TestUtils.Simulate.change($el.find('#id-fromDateFilter')[0], {target: {value: dateFrom}});
  //   TestUtils.Simulate.change($el.find('#id-toDateFilter')[0], {target: {value: dateTo}});

  //   const fromInput = filterItem.refs.fromDateFilter;
  //   const toInput = filterItem.refs.toDateFilter;
  //   fromInput.value = dateFrom;
  //   toInput.value = dateTo;
  //   TestUtils.Simulate.change(fromInput);
  //   TestUtils.Simulate.change(toInput);
  //   console.info($el.find('#id-fromDateFilter')[0]);
  //   // filterItem.refs.toDateFilter.valueAsNumber = dateTo;

  //   TestUtils.Simulate.submit($el.find('form')[0]);

  //   console.info(spy.calls[0].arguments);

  //   expect(spy).toHaveBeenCalledWith(action);
  // })
});
