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
        var item = {
            userId: getState().auth.uid,
            itemDescription: item.itemDescription,
            itemValue: item.itemValue,
            itemDate: item.itemDate,
            itemType: item.itemType    
        }
        var firebaseRef = firebase.database().ref();
        var itemsRef = firebaseRef.child('users/' + uid + '/items').push(item);

        return itemRef.then(() => {
            dispatch(addTodo({
                ...item,
                id: itemRef.key
            }))
        })
    }
}

export var addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export var deleteItem = (id, itemDescription) => {
    return {
        type: 'DELETE_ITEM',
        id,
        itemDescription
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
