/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */


 
function CardModel(items) {
    this._items = items;
    // this._selectedIndex = -1;

    this.itemAdded = new Event(this);
}

TaskModel.prototype = {
    getItems : function () {
        return [].concat(this._items);
    },

    addItem : function (item) {
        this._items.push(item);
        this.itemAdded.notify({ item : item });
    }

};