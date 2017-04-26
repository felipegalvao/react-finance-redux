import firebase, {
    firebaseRef,
    githubProvider,
    googleProvider
} from "app/firebase/";
import moment from "moment";

export const setFilterItemText = filterItemText => {
    return {
        type: "SET_FILTER_ITEM_TEXT",
        filterItemText
    };
};

export const setFilterItemDates = (filterDateFrom, filterDateTo) => {
    return {
        type: "SET_FILTER_ITEM_DATES",
        filterDateFrom,
        filterDateTo
    };
};

export const startAddItem = item => {
    return (dispatch, getState) => {
        const itemToAdd = {
            userId: getState().auth.uid,
            itemDescription: item.itemDescription,
            itemValue: item.itemValue,
            itemDate: item.itemDate,
            itemType: item.itemType
        };
        const uid = getState().auth.uid;
        const firebaseRef = firebase.database().ref();
        const itemRef = firebaseRef
            .child("users/" + uid + "/items")
            .push(itemToAdd);
    };
};

export const addItem = item => {
    return {
        type: "ADD_ITEM",
        item
    };
};

export const startAddItems = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const itemsRef = firebase
            .database()
            .ref("users/" + uid + "/items")
            .on("value", function(snapshot) {
                const items = snapshot.val() || {};
                let listItems = [];

                Object.keys(items).forEach(itemId => {
                    listItems.push({
                        id: itemId,
                        ...items[itemId]
                    });
                });

                dispatch(addItems(listItems));
            });
    };
};

export const addItems = items => {
    return {
        type: "ADD_ITEMS",
        items
    };
};

export const deleteItem = (id, itemDescription) => {
    return {
        type: "DELETE_ITEM",
        id,
        itemDescription
    };
};

export const startDeleteItem = (id, itemDescription) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        firebase.database().ref("users/" + uid + "/items/" + id).remove();
        dispatch(deleteItem(id, itemDescription));
    };
};

export const login = uid => {
    return {
        type: "LOGIN",
        uid
    };
};

export const logout = () => {
    return {
        type: "LOGOUT"
    };
};

export const startGoogleLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(googleProvider).then(
            result => {
                console.log("Auth worked!", result);
            },
            error => {
                console.log("Unable to auth", error);
            }
        );
    };
};

export const startGithubLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then(
            result => {
                console.log("Auth worked!", result);
            },
            error => {
                console.log("Unable to auth", error);
            }
        );
    };
};

export const startLogout = uid => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            firebase.database().ref("users/" + uid + "/items").off();
            console.log("logout successful");
        });
    };
};
