/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const length = nums.length
 for (let n=0; n<length; n++){
      if(nums[n] >= target){
          return n
      }

      if((n + 1) === length && nums[n] < target){
          return n + 1
      }
 }
};
