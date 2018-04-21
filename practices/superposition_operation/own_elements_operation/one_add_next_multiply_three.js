'use strict';
function one_add_next_multiply_three(collection){
var result = [];
for (let i = 0; i < collection.length; i++){
  result.push((collection[i] + collection[i + 1]) * 3)
}
result.splice(collection.length-1,1)



  return result;
}
module.exports = one_add_next_multiply_three;
