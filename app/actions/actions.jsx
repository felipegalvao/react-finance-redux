import firebase, {firebaseRef, githubProvider, googleProvider} from 'app/firebase/';
import moment from 'moment';

export var setFilterItemText = (filterItemText) => {
    return {
        type: 'SET_FILTER_ITEM_TEXT',
        filterItemText
    }
}

export var setFilterItemDates = (filterDateFrom, filterDateTo) => {
    return {
        type: 'SET_FILTER_DATES',
        filterDateFrom,
        filterDateTo
    }
}

export var startAddItem = (item) => {
    return (dispatch, getState) => {
        var itemToAdd = {
            userId: getState().auth.uid,
            itemDescription: item.itemDescription,
            itemValue: item.itemValue,
            itemDate: item.itemDate,
            itemType: item.itemType    
        }
        var uid = getState().auth.uid;
        var firebaseRef = firebase.database().ref();
        var itemRef = firebaseRef.child('users/' + uid + '/items').push(itemToAdd);

        // return itemRef.then(() => {
        //     dispatch(addItem({
        //         ...itemToAdd,
        //         id: itemRef.key
        //     }))
        // })
    }
}

export var addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export var startAddItems = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var itemsRef = firebase.database().ref('users/' + uid + '/items').on('value', function(snapshot) {
            var items = snapshot.val() || {};
            var listItems = [];

            Object.keys(items).forEach((itemId) => {
                listItems.push({
                id: itemId,
                ...items[itemId]
                });
            })

            dispatch(addItems(listItems));
        });
    }
}

export var addItems = (items) => {
    return {
        type: 'ADD_ITEMS',
        items
    }
}

export var deleteItem = (id, itemDescription) => {
    return {
        type: 'DELETE_ITEM',
        id,
        itemDescription
    }
}

export var startDeleteItem = (id, itemDescription) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        firebase.database().ref('users/' + uid + '/items/' + id).remove();
        dispatch(deleteItem(id, itemDescription));
    }
}

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export var logout = (uid) => {
    return {
        type: 'LOGOUT'
    }
}

export var startGoogleLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(googleProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    }
}

export var startGithubLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    }
}

export var startLogout = (uid) => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            firebase.database().ref('users/' + uid + '/items').off();
            console.log('logout successful');            
        });
    }
}
