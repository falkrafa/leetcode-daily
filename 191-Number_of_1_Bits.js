/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let  s =n.toString(2); 
  let count = 0;
  for(items of s){
      if(items != 0){
          count++
      }
  }
  return count;
};
