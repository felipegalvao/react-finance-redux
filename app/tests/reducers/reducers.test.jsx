import expect from 'expect';
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('filterTextReducer', () => {
        it('should set filterItemText', () => {
            var action = {
                type: 'SET_FILTER_ITEM_TEXT',
                filterItemText: 'dog'
            };

            var res = reducers.filterTextReducer(df(''), df(action));

            expect(res).toEqual(action.filterItemText);
        })
    })

    describe('filterDatesReducer', () => {
        it('should set filterDates', () => {
            var action = {
                type: 'SET_FILTER_ITEM_DATES',
                filterDateFrom: 15000000,
                filterDateTo: 15111111
            };

            var res = reducers.filterDatesReducer(df({}), df(action));

            expect(res).toEqual({
                dateFrom: action.filterDateFrom,
                dateTo: action.filterDateTo}
            );
        })
    })

    describe('itemsReducer', () => {
        it('should add new item', () => {
            var action = {
                type: 'ADD_ITEM',
                item: {
                    userId: 'abc123',
                    itemDescription: 'Dog Food',
                    itemValue: 30.50,
                    itemDate: 15000111222,
                    itemType: 'expense'
                }
            }
            var res = reducers.itemsReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].itemDescription).toEqual(action.item.itemDescription);
        })
    })
})