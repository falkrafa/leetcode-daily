/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
};
