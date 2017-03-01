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