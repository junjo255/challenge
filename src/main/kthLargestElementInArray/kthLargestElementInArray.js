/**
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
**/

const kthLargestElementInArray = (arr, k) => {
  let sorted = arr.sort((a,b) => a-b);
  let j = 0;

  for(let i = sorted.length - 1; i >= 0; i--) {
    if(k === 1) {
      return sorted[sorted.length - 1];
      break;
    } else {
      if(j === k - 1) {
        if(sorted[i] !== sorted[i+1]) {
          return sorted[i];
          break;
        }
      } else {
        if(sorted[i] !== sorted[i+1]) {
          j++;
        }
      }
    }
  }
}