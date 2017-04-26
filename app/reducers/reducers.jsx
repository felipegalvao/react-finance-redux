export const filterTextReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_FILTER_ITEM_TEXT":
            return action.filterItemText;
        default:
            return state;
    }
};

export const filterDatesReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_FILTER_ITEM_DATES":
            return {
                dateFrom: action.filterDateFrom,
                dateTo: action.filterDateTo
            };
        default:
            return state;
    }
};

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];
        case "DELETE_ITEM":
            return state.filter(item => {
                return item.id !== action.id;
            });
        case "ADD_ITEMS":
            return [...action.items];
        case "LOGOUT":
            return [];
        default:
            return state;
    }
};

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid
            };
        case "LOGOUT":
            return {};
        default:
            return state;
    }
};
