/**
 * 22. Generate Parentheses
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 *   [
 *     "((()))",
 *     "(()())",
 *     "(())()",
 *     "()(())",
 *     "()()()"
 *   ]
 **/

/**
  input - integer
  output - array of strings

  edge cases:
 			- can we assume there are only positive integers for n?

 	We will do this using brute force


 	we will create a variable (combinations) which will hold all the combinations in an array, variables (open, close) to keep track of how many of each there are left and if it's a valid well-formed parenthesis.

 	function
 		create variable combinations (empty array)
 		create variable parList (empty array)
 		

 		for loop
 			push a "(" and ")" n amount of times into parenthesis list
 		end

 		create recurse function (comb, index)
 			create variable openClose (initialize with 0)

 			if comb.length === 6, 
 				push to combinations array
 				
			if comb.length < 6
				i = index
				while i < parList.length
					if comb + parList[i] doesnt exist in combinations && openClose++ -- (depending if the current is opening or closing) is >= 0
						openClose++ or --
						recurse(comb + parList[i], i)

					i++
				end

		end 

		invoke recurse function with "" and index 0
		return combinations

	end
**/

let generateParentheses = (n) => {
	let combinations = [];
	let parList = [];

	for(let i = 0; i < n; i++){
		parList.push("(", ")");
	}

	const recurse = (comb, index) => {
		let openClose = 0;

		if(comb.length === 6){
      console.log("comb: " + comb + "index: " + index);
			combinations.push(comb);
		}

		if(comb.length < 6){
			let i = index;
			while(i < parList.length){
        console.log("in while loop with comb " + comb + " with combinations: " + combinations + "index: " + index + " i: " + i)
				let currentParVal;
				parList[i] === "(" ? currentParVal = 1 : currentParVal = -1;
       console.log("about to recurse where combinations.indexOf(comb + parList[i])(" + combinations.indexOf(comb + parList[i]) + ") and openClose(" + openClose + ") + currentParVal(" + currentParVal + ") >= 0" )
				if(combinations.indexOf(comb + parList[i]) < 0 && openClose + currentParVal >= 0){
          
          console.log("recurse(" + (comb + parList[i]) + ", " + i + ")")
          console.log("before add " + openClose)
					openClose += currentParVal;
          console.log("after add " + openClose)
					recurse(comb + parList[i], i);
				}
        console.log("i++ = " + (i + 1))
				i++
			}
		} else {
			return;
		}

	}

	recurse("", 0);
	return combinations;
}

generateParentheses(3)



















let generateParentheses = (n) => {

	let combinations = [];



	const recurse = (comb, left, right, index){
		if(comb.length === n * 2){
			combinations.push(comb);
		}

		while((left + right) > 0){
			if()
		}

	}

	recurse("", n, n, 0);
	return combinations;
}




























