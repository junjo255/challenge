package main.jumpingOnTheClouds

/**
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem


Emma is playing a new mobile game that starts with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus
cloud having a number that is equal to the number of the current cloud plus 1 or 2.
She must avoid the thunderheads. Determine the minimum number of jumps it will take
Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they
must be avoided. For example, c = [0,1,0,0,0,1,0] indexed from 0...6. The number on each
cloud is its index in the list so she must avoid the clouds at indexes 1 and 5.
She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6.
The first path takes 3 jumps while the second takes 4.

###### Function Description ######
Complete the jumpingOnClouds function in the editor below.
It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):
  - c: an array of binary integers

Output Format
  - Print the minimum number of jumps needed to win the game.

## Sample Input 0
  - 7
  - 0 0 1 0 0 1 0

## Sample Output 0
  - 4
## Explanation 0:
Emma must avoid  and . She can win the game with a minimum of  jumps:

## Sample Input 1
  - 6
  - 0 0 0 0 1 0
## Sample Output 1
  - 3

## Explanation 1:
The only thundercloud to avoid is . Emma can win the game in  jumps:
 */

fun main() {
	println(jumpingOnClouds(arrayOf(0,0,1,0,0,1,0))) // output: 4
	println(jumpingOnClouds(arrayOf(0,0,0,1,0,0)))  // output: 3
	println(jumpingOnClouds(arrayOf(0,0)))  // output: 1

}

fun jumpingOnClouds(
		c: Array<Int>
): Int {
	var jumps = 0
	var i = 0

	while (i < c.size - 1) {
		if (c[i+1] == 1 || (i+2 <= c.size - 1 && c[i+2] == 0)) {
			i += 2
			jumps++
		} else {
			i++
			jumps++
		}
	}
	return jumps
}
