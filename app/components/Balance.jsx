import React from "react";
import * as Redux from "react-redux";

import { filterItems } from "app/utils/";

const NumberFormat = require("react-number-format");

class Balance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, filterItemText, filterDates } = this.props;

    const expenses = filterItems(items, filterItemText, filterDates, "expense");
    const incomes = filterItems(items, filterItemText, filterDates, "income");

    let expenseTotal = 0;
    let incomeTotal = 0;

    // Calculate total of expenses and incomes
    for (let i = 0; i < expenses.length; i++) {
      expenseTotal += Number(expenses[i].itemValue);
    }

    for (let i = 0; i < incomes.length; i++) {
      incomeTotal += Number(incomes[i].itemValue);
    }

    const balance = incomeTotal - expenseTotal;

    return (
      <div>
        <div className="medium-12 large-12 columns">
          <h3>
            Balance:
            {" "}
            {balance < 0 ? "-" : ""}
            {" "}
            <NumberFormat
              value={parseFloat(balance).toFixed(2)}
              displayType={"text"}
              decimalSeparator={true}
              thousandSeparator={true}
              prefix={"$"}
            />
          </h3>
        </div>
      </div>
    );
  }
}

export default Redux.connect(state => {
  return state;
})(Balance);
