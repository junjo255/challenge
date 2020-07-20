package main.validPerfectSquare

import kotlin.math.floor
import kotlin.math.sqrt

/**
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false

 */

fun main() {
	println(sqrt(5.0))
//	println(isPerfectSquareBST(5))
//	println(isPerfectSquareBST(2147483647))
//
//	println(isPerfectSquareBST(16))
//	println(isPerfectSquareBST(7))
}

fun isPerfectSquareBST(
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

fun isPerfectSquareRaw(
		num: Int
): Boolean {
	var i = 1
	var n = num
	while (n > 0) {
		n -= i
		i += 2
	}
	return n == 0
}
