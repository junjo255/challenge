/**
 * 1. Two Sums
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 *    Given nums = [2, 7, 11, 15], target = 9,
 *    Because nums[0] + nums[1] = 2 + 7 = 9,
 *    return [0, 1].
 **/
const nums = [2, 11, 7, 15];
const target = 9;


function tuSums(arr, target) {
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    //arr[i] = 2 @ i = 0 
    var matchedVal = target - arr[i];
    // matchedVal = 7
    if(arr[i] in obj) {
      return [arr[i], i]
    } else {
      obj[matchedVal] = i
    }
  }
}

tuSums(nums, target);