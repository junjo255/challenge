/**
 * [String] Valid Anagram
 *
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * Example 1:
 *    Input: s = "anagram", t = "nagaram"
 *    Output: true
 *
 * Example 2:
 *    Input: s = "rat", t = "car"
 *    Output: false
 *
 * **Note: You may assume the string contains only lowercase alphabets.
 * **Follow up: What if the inputs contain unicode characters? How would
 *          you adapt your solution to such case?
 *
 * Answer: https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/882/
 **/

const validAnagram = (s, t) => {
	let anagram = true;
	var second = t.split('')
	if(s.length !== second.length) {
		return false;
	}

	for(var i = 0; i < s.length; i++) {
		if(second.indexOf(s[i]) >= 0) {
			second.splice(second.indexOf(s[i]), 1);
		} else {
			anagram = false;
			break
		}
	}
	return anagram;
}