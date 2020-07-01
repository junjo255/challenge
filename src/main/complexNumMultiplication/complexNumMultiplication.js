/**
 537. Complex Number Multiplication

 Given two strings representing two complex numbers.

 You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

 Example 1:
 Input: "1+1i", "1+1i"
 Output: "0+2i"
 Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

 Example 2:
 Input: "1+-1i", "1+-1i"
 Output: "0+-2i"
 Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
 Note:

 The input strings will not have extra blank.
 The input strings will be given in the form of a+bi, where the integer a and b will both belong to the
 range of [-100, 100]. And the output should be also in this form.
 Accepted
 */

 const complexMultiplication = (x, y) => {
  let separate = [];
  let xSplit = x.split("+");
  let ySplit = y.split("+");

  xSplit[1] = xSplit[1].slice(0,-1);
  ySplit[1] = ySplit[1].slice(0,-1);
  separate.push(xSplit, ySplit);

  const calculate = arr => {
    let one = arr[0][0] * arr[1][0];
    let two = (arr[0][0] * arr[1][1]) + (arr[0][1] * arr[1][0]) + "i";
    let three = (arr[0][1] * arr[1][1]) * -1;

    return `${one + three} + ${two}`    
  }

  return calculate(separate)
}

complexMultiplication("1+-1i", "1+-1i")



