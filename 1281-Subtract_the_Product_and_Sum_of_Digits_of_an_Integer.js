/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let intString = n.toString().split("");
  let multValue = intString.reduce((a,b)=> a*b);
  let sum = 0;
  for(items of intString) sum += Number(items);
  return multValue - sum;
};
