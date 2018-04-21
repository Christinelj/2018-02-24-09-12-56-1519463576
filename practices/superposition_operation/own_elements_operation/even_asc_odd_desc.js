'use strict';
var even_asc_odd_desc = function (collection) {
    var result = [];
    var even = [];
    var odd = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            even.push(collection[i]);
        }
        if (collection[i] % 2 === 1) {
            odd.push(collection[i]);
        }
    }
    even.sort(function (a, b) {
        return a - b
    })
    odd.sort(function (a, b) {
        return b - a
    })
    result = even.concat(odd);
    return result;
};
module.exports = even_asc_odd_desc;
