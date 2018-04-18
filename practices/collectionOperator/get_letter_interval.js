'use strict';

function get_letter_interval(number_a, number_b) {
  var list = ['a', 'b', 'c', 'd', 'e'];
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

module.exports = get_letter_interval;
