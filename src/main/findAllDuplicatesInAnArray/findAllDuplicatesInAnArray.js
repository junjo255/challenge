/**
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
**/

const findAllDuplicates = arr => {
  let container = [];
  let duplicates = [];

  arr.forEach(item => {
    if(container.indexOf(item) > -1) {
      duplicates.push(item);
    } else {
      container.push(item);
    }
  });
  return duplicates;
}