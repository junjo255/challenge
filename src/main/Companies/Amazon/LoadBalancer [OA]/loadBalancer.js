/**
 Load Balancer ⭐⭐ Medium
 Given an array containing only positive integers, return if you can pick two integers from the array which cuts the
 array into three pieces such that the sum of elements in all pieces is equal.

 Example 1:
     Input:  array = [2, 4, 5, 3, 3, 9, 2, 2, 2]
     Output: true
     Explanation: choosing the number 5 and 9 results in three pieces [2, 4], [3, 3] and [2, 2, 2]. Sum = 6.

 Example 2:
     Input:  array =[1, 1, 1, 1],
     Output: false
 */

 let loadBalancer = array => {
 	let balanced = false;
 	if(array.length < 5) {
 		return false;
 	}

 	for(let i = 1; i < array.length - 4; i++) {
 		for(let j = i + 2; j < array.length - 2; j++) {
 			let firstBlock = array.slice(0, i).reduce((a, b) => a + b, 0);
 			let secondBlock = array.slice(i+1, j).reduce((a, b) => a + b, 0);
 			let thirdBlock = array.slice(j+1, array.length).reduce((a, b) => a + b, 0);;

 			if(firstBlock === secondBlock && secondBlock === thirdBlock) {
 				balanced = true;
 				break;
 			}
 		}
 		if(balanced) {
 			break;
 		}
 	}
 	return balanced;
 }

