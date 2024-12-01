/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let str = n.toString();
  let numList = [];
  let sum;
  while (true) {
      sum = 0;
      for (let i = 0; i < str.length; i++) {
          let digit = parseInt(str[i]);
          sum += digit * digit;
      }
      if (sum === 1) {
          return true;
      }
      if (numList.includes(sum)) {
          return false;
      }
      numList.push(sum);
      str = sum.toString();
  }
};
