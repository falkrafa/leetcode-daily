/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let cont = 0 
  for(let i = low;i<high+1;i++){
          if(i%2 != 0){
              cont++;
          }
  }
  return cont;
};
