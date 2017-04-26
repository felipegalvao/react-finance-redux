export const filterItems = (items, filterItemText, filterDates, type) => {
    // Filter items by Text
    let filteredItems;
    if (filterItemText === "") {
        filteredItems = items;
    } else {
        filteredItems = items.filter(item => {
            const itemDescription = item.itemDescription.toLowerCase();
            return (
                filterItemText.length === 0 ||
                itemDescription.indexOf(filterItemText.toLowerCase()) > -1
            );
        });
    }

    // Filter Items By Date
    if (filterDates.dateFrom && filterDates.dateTo) {
        filteredItems = filteredItems.filter(item => {
            const itemDate = item.itemDate;
            return (
                itemDate >= filterDates.dateFrom &&
                itemDate <= filterDates.dateTo
            );
        });
    } else {
        filteredItems = filteredItems;
    }

    // Filter items by type
    filteredItems = filteredItems.filter(item => {
        return item.itemType === type;
    });

    return filteredItems;
};
