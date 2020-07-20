package main.findAllDuplicatesInAnArray

/**
442. Find All Duplicates in An Array
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
**/

fun main() {
	val list = intArrayOf(4,3,2,7,8,2,3,1)
	println(findAllDuplicatesInAnArray(list))
}

fun findAllDuplicatesInAnArray(
		nums: IntArray
): List<Int> {
	return nums.groupBy { it }.mapValues { it.value.count() }.filter { it.value == 2 }.map { it.key }
}