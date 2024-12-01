/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.every(s => /^[a-zA-Z]+$/.test(s))){
    return ("");
  }
  else if(strs.length == 1){
    return (strs[0]);
  }
  let prefix = "";
  for(let i=0; i<strs.length; i++){
    let currentChar = strs[0][i];
    if(strs.slice(1).every(s => s[i] === currentChar)){
      prefix += currentChar;
    }
    else break;
  }
  if(new Set(strs).size == 1){
    return strs[0];
  }
  else if(strs.length == 2 && strs[0].startsWith(strs[1])) {
    return strs[1];
  }
  return prefix;
};
