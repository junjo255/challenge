/**
 * [String] First Unique Character in a String
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * Examples:
 *    s = "leetcode"
 *    return 0.
 *
 *    s = "loveleetcode",
 *    return 2.
 *
 * **Note: You may assume the string contain only lowercase letters.
 *
 * Answer: https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/881/




input - string
output - integer

 **/


 const firstUnique = string => {
 	let unique;
 	let map = {};
 	let i = 0;

 	while(!unique) {
 		if(string.lastIndexOf(string[i]) === i && !map[string[i]]) {
 			unique = string[i];
 		} else {
 			map[string[i]] = 1;
 			i++
 		}
 	}

 	return i;
 }