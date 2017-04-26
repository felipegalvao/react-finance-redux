import expect from "expect";
const df = require("deep-freeze-strict");

const reducers = require("reducers");

describe("Reducers", () => {
    describe("filterTextReducer", () => {
        it("should set filterItemText", () => {
            const action = {
                type: "SET_FILTER_ITEM_TEXT",
                filterItemText: "dog"
            };

            const res = reducers.filterTextReducer(df(""), df(action));

            expect(res).toEqual(action.filterItemText);
        });
    });

    describe("filterDatesReducer", () => {
        it("should set filterDates", () => {
            const action = {
                type: "SET_FILTER_ITEM_DATES",
                filterDateFrom: 15000000,
                filterDateTo: 15111111
            };

            const res = reducers.filterDatesReducer(df({}), df(action));

            expect(res).toEqual({
                dateFrom: action.filterDateFrom,
                dateTo: action.filterDateTo
            });
        });
    });

    describe("itemsReducer", () => {
        it("should add new item", () => {
            const action = {
                type: "ADD_ITEM",
                item: {
                    userId: "abc123",
                    itemDescription: "Dog Food",
                    itemValue: 30.50,
                    itemDate: 15000111222,
                    itemType: "expense"
                }
            };
            const res = reducers.itemsReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].itemDescription).toEqual(action.item.itemDescription);
        });
    });
});
