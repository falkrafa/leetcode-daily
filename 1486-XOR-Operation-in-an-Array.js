/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let response = 0;

  for(let i = 0; i<n; i++){
      response = eval(`${response} ^ ${start + 2 * i}`)
  }

  return response
};
