var longestConsecutive = function(nums) {
  if(nums.length<1) return 0;
  let count = 1;
  let sortedNums = nums.sort((a,b)=>a-b);
  let max =1;
  for(let i = 0;i<sortedNums.length;i++){
      if(sortedNums[i] == sortedNums[i+1]) continue;
      if(sortedNums[i]+1 == sortedNums[i+1]){
          count++
          max = Math.max(count,max);
      }
      else{
          count = 1;
      }
  }
  return max;
};
