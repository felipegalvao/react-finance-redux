import expect from "expect";

const actions = require("actions");

describe("Actions", () => {
    it("should generate set filter text action", () => {
        const action = {
            type: "SET_FILTER_ITEM_TEXT",
            filterItemText: "Some filter"
        };
        const res = actions.setFilterItemText(action.filterItemText);

        expect(res).toEqual(action);
    });

    it("should generate set filter dates action", () => {
        const action = {
            type: "SET_FILTER_ITEM_DATES",
            filterDateFrom: 15000000,
            filterDateTo: 15111000
        };
        const res = actions.setFilterItemDates(
            action.filterDateFrom,
            action.filterDateTo
        );

        expect(res).toEqual(action);
    });

    it("should generate add item action", () => {
        const action = {
            type: "ADD_ITEM",
            item: {
                userId: "abc123",
                itemDescription: "Dog Food",
                itemValue: 30.50,
                itemDate: 15000000,
                itemType: "expense"
            }
        };
        const res = actions.addItem(action.item);

        expect(res).toEqual(action);
    });

    it("should generate add items action", () => {
        const action = {
            type: "ADD_ITEMS",
            items: [
                {
                    userId: "abc123",
                    itemDescription: "Dog Food",
                    itemValue: 30.50,
                    itemDate: 15000000,
                    itemType: "expense"
                }
            ]
        };
        const res = actions.addItems(action.items);

        expect(res).toEqual(action);
    });

    it("should generate delete item action", () => {
        const action = {
            type: "DELETE_ITEM",
            id: "123456",
            itemDescription: "Dog food"
        };
        const res = actions.deleteItem(action.id, action.itemDescription);

        expect(res).toEqual(action);
    });

    it("should generate login action", () => {
        const action = {
            type: "LOGIN",
            uid: "123456"
        };
        const res = actions.login(action.uid);

        expect(res).toEqual(action);
    });

    it("should generate logout action", () => {
        const action = {
            type: "LOGOUT"
        };
        const res = actions.logout();

        expect(res).toEqual(action);
    });
});
