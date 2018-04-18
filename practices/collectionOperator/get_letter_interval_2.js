'use strict';

function get_letter_interval_2(number_a, number_b) {
  var list = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 
    'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak',
    'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at',
    'au', 'av', 'aw', 'ax', 'ay','az', 'ba'
  ];
  var result = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(list[i-1])
    }
  }
  if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      result.push(list[i-1])
    }
  }
  if (number_a == number_b) {
    result.push(list[number_a-1])
  }
  return result;
}

module.exports = get_letter_interval_2;

