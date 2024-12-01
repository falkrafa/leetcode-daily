/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let array =  Array.from(Array(n), (_, i) => (i + 1).toString());
  for(let i=0;i<array.length;i++){
      if(array[i] % 5 ==0 && array[i] % 3 ==0){
          array[i] = "FizzBuzz";
      }
      else if(array[i] % 3 ==0){
          array[i] = "Fizz";
      }
      else if(array[i] % 5 ==0){
          array[i] = "Buzz";
      }
  }
  return array;
};
