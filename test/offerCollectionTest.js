var assert = require('chai').assert;
var OfferCollection = require('./../public/js/model/offerCollection');
describe('OfferCollection', function () {
    describe('#constructor', function () {
        it('should return zero length', function () {
            var offers = new OfferCollection();
            assert.equal(0, offers.length());
        });
    });
    describe('#add', function () {
        it('should return one length', function () {
            var offers = new OfferCollection();
            offers.add({});
            assert.equal(1, offers.length());
        });
        it('should return added obj', function () {
            var offers = new OfferCollection();
            var offer = {};
            offers.add(offer);
            assert.equal(offer, offers.getFirst());
        });
        it('should return two length', function () {
            var offers = new OfferCollection();
            offers.add({});
            offers.add({});
            assert.equal(2, offers.length());
        });
        it('should return added objects', function () {
            var offers = new OfferCollection();
            var firstOffer = {};
            var secondOffer = {};
            offers.add(firstOffer);
            offers.add(secondOffer);
            assert.equal(firstOffer, offers.getFirst());
            assert.equal(secondOffer, offers.getLast());
        });
    });
    describe('#filter', function () {});
    describe('#remove', function () {});
});