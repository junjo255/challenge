/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
	let result = [];

	const recurse = (string, index) => {
		if(!result.includes(string)){
			result.push(string);
		}

		let i = index;
		while(i < str.length){
			recurse(string + )
		}
		i++
	}

	recurse("", 0)
	return result;
};

console.log(powerSet("abc"));


"jmpu"

[ ,j, jm, jp, ju, jmp, jmu, jpu, jmpu, m, mp, mu, mpu, p, pu, u]