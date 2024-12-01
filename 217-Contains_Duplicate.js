/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let nums2 = nums.filter((num, index) => nums.indexOf(num) !== index);
  return nums2.length > 0;
};
