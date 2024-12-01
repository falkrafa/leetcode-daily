/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let withoutMin = salary.filter(function(n) { return n != Math.min.apply(Math,salary)});
  let newString = withoutMin.filter(function(n) { return n != Math.max.apply(Math,withoutMin)});
  let sum = 0;

  for(items of newString) sum += items;
  return sum/newString.length;
};
