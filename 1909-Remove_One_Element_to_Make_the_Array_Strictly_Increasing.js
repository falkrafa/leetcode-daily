var canBeIncreasing = function(nums) {
  if (nums.length <= 2) return true;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= nums[i + 1]) {
          let temp1 = nums.slice(0, i).concat(nums.slice(i + 1));
          let temp2 = nums.slice(0, i + 1).concat(nums.slice(i + 2));
          return isIncreasing(temp1) || isIncreasing(temp2);
      }
  }
  return true;
};

function isIncreasing(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] >= nums[i + 1]) {
          return false;
      }
  }
  return true;
}
