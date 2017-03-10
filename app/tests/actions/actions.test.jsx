import expect from 'expect';

var actions = require('actions');

describe('Actions', () => {
    it('should generate set filter text action', () => {
        var action = {
            type: 'SET_FILTER_ITEM_TEXT',
            filterItemText: 'Some filter'
        };
        var res = actions.setFilterItemText(action.filterItemText);

        expect(res).toEqual(action);
    })

    it('should generate set filter dates action', () => {
        var action = {
            type: 'SET_FILTER_ITEM_DATES',
            filterDateFrom: 15000000,
            filterDateTo: 15111000
        };
        var res = actions.setFilterItemDates(action.filterDateFrom, action.filterDateTo);

        expect(res).toEqual(action);
    })

    it('should generate add item action', () => {
        var action = {
            type: 'ADD_ITEM',
            item: {
                userId: 'abc123',
                itemDescription: 'Dog Food',
                itemValue: 30.50,
                itemDate: 15000000,
                itemType: 'expense'
            }
        };
        var res = actions.addItem(action.item);

        expect(res).toEqual(action);
    })

    it('should generate add items action', () => {
        var action = {
            type: 'ADD_ITEMS',
            items: [{
                userId: 'abc123',
                itemDescription: 'Dog Food',
                itemValue: 30.50,
                itemDate: 15000000,
                itemType: 'expense'
            }]
        };
        var res = actions.addItems(action.items);

        expect(res).toEqual(action);
    })

    it('should generate delete item action', () => {
        var action = {
            type: 'DELETE_ITEM',
            id: '123456',
            itemDescription: 'Dog food'
        };
        var res = actions.deleteItem(action.id, action.itemDescription);

        expect(res).toEqual(action);
    })

    it('should generate login action', () => {
        var action = {
            type: 'LOGIN',
            uid: '123456'
        };
        var res = actions.login(action.uid);

        expect(res).toEqual(action);
    })

    it('should generate logout action', () => {
        var action = {
            type: 'LOGOUT'
        };
        var res = actions.logout();

        expect(res).toEqual(action);
    })
})