'use strict';
var even_group_calculate_average = function (collection) {
    function select_even_number(collection) {
        var select_even_number_collection = [];
        for (let i = 0; i < collection.length; i++) {
            if ((i + 1) % 2 === 0) {
                select_even_number_collection.push(collection[i]);
            }
        }
        return select_even_number_collection;
    }

    function select_even(collection) {
        var even_collection = [];
        for (let j = 0; j < collection.length; j++) {
            if (collection[j] % 2 === 0) {
                even_collection.push(collection[j]);
            }
        }
        return even_collection;
    };

    function subgroup(collection) {
        var group1 = []; var group2 = []; var group3 = []; var result = [];
        for (let j = 0; j < collection.length; j++) {
            if (collection[j].toString().length === 1) {
                group1.push(collection[j]);
            }
            if (collection[j].toString().length === 2) {
                group2.push(collection[j]);
            }
            if (collection[j].toString().length === 3) {
                group3.push(collection[j]);
            }
        };
        result.push(group1);
        result.push(group2);
        result.push(group3);
        return result;
    }

    function average(collection) {
        var sum = 0;
        var ave = 0;
        for (let m = 0; m < collection.length; m++) {
            sum += collection[m];
            ave = sum / collection.length;
        }
        return ave;
    };

    var result = [];
    var even_number = select_even_number(collection);
    var even = select_even(even_number);
    if (even.length === 0) {
        result[0] = 0;
    }
    else {
        result = subgroup(even);
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i] == false) {
                result.splice(result[i], 1);
            } else {
                result[i] = average(result[i]);
            }
        }
    }
    return result;
}

module.exports = even_group_calculate_average;
