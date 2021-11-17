"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
var CharactersCollections = /** @class */ (function () {
    function CharactersCollections(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        var leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join('');
    };
    return CharactersCollections;
}());
exports.CharactersCollections = CharactersCollections;
