/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let findZero = new Set(nums);
  if(findZero.has(0)) return 0;
  let product = nums.reduce((a,b)=>a*b);
  console.log(product);
  if(product === 0) return 0;
  if(product>0){
      return 1
  }
  else{
      return -1;
  }
};
