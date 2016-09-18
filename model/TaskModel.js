/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */


function Event(sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach : function (listener) {
        this._listeners.push(listener);
    },
    notify : function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }
};
 
function TaskModel(items) {
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