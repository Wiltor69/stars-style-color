const ratingItemList = document.querySelectorAll('.rating-item');
const ratingItemArray = Array.prototype.slice.call(ratingItemList);
ratingItemArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);