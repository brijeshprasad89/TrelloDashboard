/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interaction.
 */
function ListView(model, elements) {
    this._model = model;
    this._elements = elements;

    // this.listModified = new Event(this);
    this.saveListClicked = new Event(this);
    this.addCardClicked = new Event(this);
    this.togglerClicked = new Event(this);
    this.saveTaskClicked = new Event(this);

    var _this = this;

    // attach model listeners
    this._model.itemAdded.attach(function () {
        _this.rebuildList();
    });

    // attach listeners to HTML controls
    this._elements.saveList.click(function (e) {
        _this.saveListClicked.notify();
    });
    this._elements.addCard.click(function () {
        _this.addCardClicked.notify(this);
    });
    this._elements.toggler.click(function () {
        _this.togglerClicked.notify();
    });
    this._elements.saveTask.click(function () {
        _this.saveTaskClicked.notify();
    });
}

ListView.prototype = {
    show : function () {
        this.rebuildList();
    },
    showModalDialog : function(){
        console.log("Modal called");
    },
    rebuildList : function () {
        var list, items, key;
        list = this._elements.list;
        list.html('');

        items = this._model.getItems();
    }
};