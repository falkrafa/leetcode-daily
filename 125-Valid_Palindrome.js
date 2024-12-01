/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let SplitedString = s.split("");
  let reverseString = SplitedString.reverse();
  let newString = reverseString.join("");

  if(s.replace(/[^A-Z0-9]+/ig, "").toLowerCase() == newString.replace(/[^A-Z0-9]+/ig, "").toLowerCase()) return true;
  else return false;
};
