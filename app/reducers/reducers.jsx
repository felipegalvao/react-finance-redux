export var filterTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER_ITEM_TEXT':
            return action.filterItemText;
        default:
            return state;
    };
}

export var filterDatesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FILTER_DATES':
            return {
                dateFrom: action.filterDateFrom,
                dateTo: action.filterDateTo
            };
        default:
            return state;
    }
}