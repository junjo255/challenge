/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!

  let reversed = 0;
  while(number > 0) {
  	reversed = (reversed * 10) + (number % 10);
  	number = parseInt(number/10);
  }
  return reversed;
}


// 3672

// reversed
// 0 + 2
// 20 + 7
// 270 + 6
// 2760 + 3
// x
// 367
// 36
// 3

