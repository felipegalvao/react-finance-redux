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

export var itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        case 'DELETE_ITEM':
            return state.filter((item) => {
                return item.id !== action.id
            })
        case 'ADD_ITEMS':
            return [
                ...state,
                ...action.items
            ]
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
}

export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};