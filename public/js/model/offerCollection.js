var OfferCollection = function () {
    this._items = [];
};

OfferCollection.prototype.length = function () {
    return this._items.length;
};

OfferCollection.prototype.add = function (offer) {
    this._items.push(offer);
};

OfferCollection.prototype.getFirst = function () {
    return this._items[0];
};

OfferCollection.prototype.getLast = function () {
    return this._items[this._items.length-1];
};

module.exports = OfferCollection;
