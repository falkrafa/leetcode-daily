/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let sum = 0;
  for(let i=0;i<accounts.length;i++){
      if(accounts[i].reduce((a,b)=> a+b) > sum){
           sum = accounts[i].reduce((a,b)=> a+b);
      }
  }
  return sum;
};
