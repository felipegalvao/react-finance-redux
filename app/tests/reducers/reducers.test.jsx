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
                type: 'SET_FILTER_DATES',
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
})