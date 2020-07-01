/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *    Input: ["flower","flow","flight"]
 *    Output: "fl"
 *
 * Example 2:
 *    Input: ["dog","racecar","car"]
 *    Output: ""
 *    Explanation: There is no common prefix among the input strings.
 *
 * Note:
 *    All given inputs are in lowercase letters a-z.
 */



const longestCommonPrefix = (arr) => {
	let commonPrefix = "";
	let done = false;
	let index = 0;

	while(done === false) {
		let base = "";
		for(let i = 0; i < arr.length; i++) {
			if(base === "") {
				base = arr[i][index];
			}
			if(arr[i][index] === base) {
				if(i === arr.length - 1) {
					commonPrefix += base;
					base = ""; 
					index++
				}
			} else {
				done = true;
			}
		}
	}
	return commonPrefix;
}

