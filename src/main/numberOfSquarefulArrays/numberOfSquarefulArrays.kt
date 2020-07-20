package main.numberOfSquarefulArrays
/**
    996. Number of Squareful Arrays

	Given an array A of non-negative integers, the array is squareful
	if for every pair of adjacent elements, their sum is a perfect square.

	Return the number of permutations of A that are squareful.
	Two permutations A1 and A2 differ if and only if there is some index i such that A1[i] != A2[i].

	Example 1:
	Input: [1,17,8]
	Output: 2
	Explanation:
	[1,8,17] and [17,8,1] are the valid permutations.


	Example 2:
	Input: [2,2,2]
	Output: 1

	Note:
	1 <= A.length <= 12
	0 <= A[i] <= 1e9
**/


fun main() {

}

//fun numSquarefulPerms(A: IntArray): Int {
//
//}

fun isPerfectSquare(
		num: Int
): Boolean {
	if (num == 1) return true

	var left = 1
	var right = num
	var middle: Int

	while(left <= right) {
		middle = left + (right-left)/2

		when {
			middle.toDouble() == num/middle.toDouble() -> return true
			middle > num/middle -> right = middle - 1
			else -> left = middle + 1
		}
	}

	return false
}