export var filterItems = (items, filterItemText, filterDates, type) => {
    // Filter items by Text
    if (filterItemText === '') {
        var filteredItems = items;
    } else {
        var filteredItems = items.filter((item) => {
            var itemDescription = item.itemDescription.toLowerCase();
            return filterItemText.length === 0 || itemDescription.indexOf(filterItemText.toLowerCase()) > -1;        
        })
    }

    // Filter Items By Date
    if (filterDates.dateFrom && filterDates.dateTo) {
        var filteredItems = filteredItems.filter((item) => {
            var itemDate = item.itemDate;
            return itemDate >= filterDates.dateFrom && itemDate <= filterDates.dateTo;
        })
    } else {
        var filteredItems = filteredItems;        
    }

    // Filter items by type
    var filteredItems = filteredItems.filter((item) => {
        return item.itemType === type;
    })

    return filteredItems;
}