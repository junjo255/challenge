/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
	let head = 0;
	let tail = string.length - 1;
	let palindrome = false;

	while(!palindrome && tail - head > 1) {
		let selected = string.slice(head, tail + 1);
		let reversed = selected.split("").reverse().join("");
		console.log(`selected = ${selected} | reversed = ${reversed}`)

		if(selected === reversed) {
			palindrome = selected;
		}
		head++;
		tail--
	}
	return palindrome
};
