/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a,b) => a-b)
  const isOdd = mergedArray.length % 2 === 0
  
  if(isOdd){
    while (mergedArray.length > 2){
        mergedArray.pop()
        mergedArray.shift()
    }

    return (mergedArray[0] + mergedArray[1])/2
  } else {
    while (mergedArray.length > 1){
        mergedArray.pop()
        mergedArray.shift()
    }

    return mergedArray[0]
  }
};
