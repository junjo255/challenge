/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  let multiplier = 1;
  let isWholeNumber = false;
  if(Number.isInteger(number)) {
  	return Math.floor(number) + "/" + 1;
  }

  while(!isWholeNumber) {
  	multiplier += 1;
  	if((number * multiplier) % 1 === 0) {
  		isWholeNumber = true;
  	}
  }
  return (number * multiplier) + "/" + multiplier;
};
