'use strict';
var single_element = function (collection) {
    var even = [];
    for (let i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 === 0) {
            even.push(collection[i]);
        }
    }

    var compare = [];
    for (let m = 0; m < even.length; m++) {
        for (let n = m + 1; n < even.length; n++) {
            if (even[m] === even[n]) {
                compare.push(even[m])
            }
        }

    }
    for (let i = 0; i < compare.length; i++) {
        for (let j = even.length - 1; j >= 0; j--) {
            if (even[j] === compare[i]) {
                even.splice(even[j - 2], 1)
            }
        }
    }

    even.sort(function (a, b) {
        return a - b
    })
    return even;
}
module.exports = single_element;
