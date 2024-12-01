var reverse = function(x) {
  const MIN_VALUE = Math.pow(-2, 31);
  const MAX_VALUE = Math.pow(2, 31) - 1;

  let stringNumber = x.toString();
  let stringNegative = new Set(stringNumber);

  if(stringNegative.has('-')){
      stringNegative = stringNumber.replace('-','');
      let reversedNegative = Number("-" + Array.from(stringNegative).reverse().join(""));
      return (reversedNegative < MIN_VALUE || reversedNegative > MAX_VALUE) ? 0 : reversedNegative;
  }
  
  let reversed = Number(Array.from(stringNumber).reverse().join(""));
  return (reversed < MIN_VALUE || reversed > MAX_VALUE) ? 0 : reversed;
};
