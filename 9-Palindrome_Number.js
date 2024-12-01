/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let StringNumber = x.toString();
  let StringSplit = StringNumber.split("");
  let reverseString = StringSplit.reverse();
  let joinArray = reverseString.join("");

  if(StringNumber == joinArray){
      return true;
  }
  else if(StringNumber == "10"){
      return false
  }
  else if(StringNumber[0] == "-"){
      return false;
  }
  else{
      return false;
  }

};
