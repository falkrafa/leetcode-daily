/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //on2
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
          if(nums[i] + nums[j] === target){
              return [i,j]
          }
      }
  }
  //on
  
  // let mp = new Map()
  
  // for (let i = 0; i < nums.length; i++) {
  //     let op = target - nums[i]
  //     if(mp.has(op)){
  //         return [i, mp.get(op)]
  //     }
  //     mp.set(nums[i], i)
  // }

};
