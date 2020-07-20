package main.kthLargestElementInArray

/**
Find the kth largest element in an unsorted array. Note
that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
**/

fun main() {
	val nums = intArrayOf(3,2,1,5,6,4)
	val nums2 = intArrayOf(3,2,3,1,2,4,5,5,6)

	println(kthLargestElementInArray(nums, 2))
	println(kthLargestElementInArray(nums2, 4))
}
/**
 * Fastest way
 * sortDescending uses Dual-Pivot Quicksort
 * space complexity: O(1)
 * Time complexity:
 * 		Best -> O(n log(n))
 *		Worst -> O
 */
fun kthLargestElementInArray(
		nums: IntArray,
		k: Int
): Int {
	nums.sortDescending()
	return nums[k-1]
}


///**
// * Actual implementation
// * (one-pivot) Quicksort implementations
// */
//
//fun kthLargestElementInArray(
//		nums: IntArray,
//		k: Int
//): Int {
//	return sortByDescending(nums, nums.size - k, 0, nums.size - 1)
//}
//
//fun sortByDescending(
//		nums: IntArray,
//		k: Int,
//		left: Int,
//		right: Int
//): Int {
//	// Create a middle pointer
//	val middle = left + ((right - 1)/2)
//	// take the middle value and swap with the left value
//	swap(nums, left, middle)
//
//	// create a pivot & its index
//	val pivot = nums[left]
//	var pivotIdx = left
//
//	// for loop
//	// if adjacent value is less than pivot,
//	// increment pivot and swap
//	var i = left + 1
//	while (i <= right) {
//		if (nums[i] < pivot) {
//			pivotIdx++
//			if (pivotIdx != i) swap(nums, pivotIdx, i)
//		}
//		i++
//	}
//
//	if (pivotIdx != left) swap(nums, pivotIdx, left)
//	if (pivotIdx == k) return pivot
//	if (pivotIdx > k) return sortByDescending(nums, k, left, pivotIdx - 1)
//	else return sortByDescending(nums, k, pivotIdx + 1, right)
//
//}
//
//fun swap(
//		nums: IntArray,
//		i: Int,
//		j: Int
//) {
//	val temp = nums[i]
//	nums[i] = nums[j]
//	nums[j] = temp
//}