/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let firstPositiveNumber = 1;
  nums = nums.sort((a,b) => a-b)


  for (let n of nums) {
      if(n === firstPositiveNumber){
          firstPositiveNumber++
      }
  }
  return firstPositiveNumber
};
