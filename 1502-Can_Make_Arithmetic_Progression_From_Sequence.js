/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  let n = arr.length;
 if (n == 1)
  return true;

// Sort array
arr.sort((a, b) => a - b);

// After sorting, difference between
// consecutive elements must be same.
let d = arr[1] - arr[0];
for (let i=2; i<n; i++)
  if (arr[i] - arr[i-1] != d)
    return false;

return true;
};
