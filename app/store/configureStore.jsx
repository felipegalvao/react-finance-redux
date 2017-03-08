import * as redux from 'redux';
import thunk from 'redux-thunk';

import {filterTextReducer, filterDatesReducer, itemsReducer, authReducer} from 'reducers';

export var configure = () => {
    var reducer = redux.combineReducers({
        items: itemsReducer,
        filterItemText: filterTextReducer,
        filterDates: filterDatesReducer,
        auth: authReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};