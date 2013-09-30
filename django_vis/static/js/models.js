function SelectableArray () {
    this.items = ko.observableArray();
    this.selectedItems = ko.observableArray();
}
SelectableArray.prototype.removeSelected = function () {
    var selected;
    selected = this.selectedItems();
    this.items.remove(function (item) {
        for (var i = 0; i < selected.length; ++i)
            if (_.isEqual(selected[i], item)) return true;
        return false;
    });
    this.selectedItems.removeAll();
    this.selectedItems.valueHasMutated();
    this.items.valueHasMutated();
};

function ListOfFiles () {
    SelectableArray.call(this);
    this.items = ko.observableArray([
        {"Filename": "bwv77.mxl"},
        {"Filename": "madrigal51.mxl"}
    ]);
}
ListOfFiles.prototype = Object.create(SelectableArray.prototype);
ListOfFiles.prototype.constructor = ListOfFiles;

function ListOfPieces () {
    SelectableArray.call(this);
    this.items = ko.observableArray();
}
ListOfPieces.prototype = Object.create(SelectableArray.prototype);
ListOfPieces.prototype.constructor = ListOfPieces;

function Wizard() {
    var self = this;
    self.state = ko.observable();
}
