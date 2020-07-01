/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
	let collection = {};
	let result = [];
	let swapped = true;
	let temp;

	string.split('').forEach(letter => {
		letter in collection ? collection[letter] = collection[letter] + 1 : collection[letter] = 1;
	});

	for(let key in collection) {
		result.push([key, collection[key]])
	} 

	while(swapped === true) {
		swapped = false;

		for(let i = result.length - 1; i > 0; i--) {
			if(result[i][1] > result[i - 1][1] || result[i][1] > result[i - 1][1] && result[i][0].charCodeAt(0) < result[i - 1][0].charCodeAt(0)) {
				temp = result[i];
				result[i] = result[i - 1];
				result[i - 1] = temp;
        swapped = true;
			}
		}
	}

  return result;
};










