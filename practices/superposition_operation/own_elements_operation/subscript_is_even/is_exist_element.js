'use strict';
var is_exist_element = function (collection, element) {
    var result = true;
    var even = [];
    for (let i = 0; i < collection.length; i++) {
        if (i % 2 === 0) {
            even.push(collection[i]);
        }
    }
    for (let j = 0; j < even.length; j++) {
        if (even[j] === element) {
            result = true;
            break;
        } else {
            result = false;
        }
    }

    return result;
}
module.exports = is_exist_element;
