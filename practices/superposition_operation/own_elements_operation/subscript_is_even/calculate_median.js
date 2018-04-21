'use strict';
var calculate_median = function (collection) {
    
    var new_collection = [];
    for (let i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 === 0) {
            new_collection.push(collection[i]);
        }
    }
    var middle = 0;
    for (let j = 0; j < new_collection.length; j++) {
        if (new_collection.length % 2 === 1) {
            middle = new_collection[Math.floor(new_collection.length / 2)];
        }
        if (new_collection.length % 2 === 0) {
            var lowmiddle = new_collection[new_collection.length / 2 - 1];
            var highmiddle = new_collection[new_collection.length / 2 ];
            middle = (lowmiddle + highmiddle) / 2 ;
        }
    }
    return middle;
};
module.exports = calculate_median;
