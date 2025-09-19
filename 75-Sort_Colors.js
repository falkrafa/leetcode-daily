/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i=0; i<nums.length; i++){
        let hasSwapped = false
        for(let j=0; j<nums.length - 1- i; j++){
            if(nums[j] > nums[j+1]){
                const temp = nums[j]
                nums[j] = nums[j +1]
                nums[j+1] = temp
                hasSwapped= true
            }
        }
        if(!hasSwapped){break}
    }

    return nums
};
