package main.arrangingCoins
/**
441. Arranging Coins

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.

**/

fun main() {
	println(arrangingCoins(8))
	println(arrangingCoins(5))
	println(arrangingCoins(3))
	println(arrangingCoins(2))
	println(arrangingCoins(1))
}

fun arrangingCoins(
	n: Int
): Int {
	var stairCaseRows = 0
	var steps = 1
	var coins = n

	if (n == 1) {
		stairCaseRows = 1
	}

	while (coins > 1) {
		if (steps <= coins) {
			stairCaseRows += 1
		}
		coins -= steps
		steps += 1
	}
	return stairCaseRows
}
