/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/



/* 
input - integer (total)
output - integer (number of ways)
edge cases : 
	- can I assume we will only integers as parameter and if yes, will it only be whole numbers?

I'm thinking whether it's best to hold the the values in an array. I think I'll go with that since we can keep track of each value by index.

We will need a variable for number of different ways (solutions), object where keys are the number to match and value is how many variations, 

*/

// const coins = [{
// 	1: 
// {
// 	2: 0
// },
// {0
// },
// 	5: 0
// },
// {
// 	10: 0
// },
// {
// 	20: 0
// },
// {
// 	50: 0
// },
// {
// 	100: 0
// },
// {
// 	200: 0
// }];

// let memo = {
// 	1: 1,
// 	2: 2,
// 	3: 2,		(3-2 = 1..  1 + 1)
// 	4: 3,		(4-2 = 2..	1 + 2)
// 	5: 4,		(5-5 = 0..  1 + 3) when it equals to 0, count it as 1 and get the value of the 1 number lower than current.
// 	// 6: 5?,	(6-5 = 1..  (1 + 1) + 3)
// 	// 7: 5?, 	(7-5 = 2..  (1 + 2) + 2)
// 	// 8: 7?,	(8-5 = 3..	(1 + 2) + 2)
// };

/**
create a function to call recursively if the length of the passed array is greater than 1.
input - 1 array of relevent coin values.
output - 1 array of relevent coin values without the one in the first index.
variable to keep track of number of 
it will increment the solutions variable whenever condition is met.
**/


// const coins = {
// 	1: 0,
// 	2: 0,
// 	5: 0,
// 	10: 0,
// 	20: 0,
// 	50: 0,
// 	100: 0,
// 	200: 0
// }

// [1, 2, 5, 10, 20, 50, 100, 200]



// let makeChange = (total) => {
//     let count = 0;
//     const coin = [1,2,3];

//     const recurse = (sum, index) => {
//          //
//         if (sum === total) {
//             console.log("count: " + (count + 1) + " index: " + index)
//             count++;
//         }

//         if (sum < total) {
//                 // 0   = 0 ;
//             let i = index;
//             while(i < coin.length) {
//                 // 0  +   1    <= 4    i = 0
//                 //
//                  console.log("in while loop with sum " + sum + " with count: " + count + " index: " + index + " i: " + i)
//               if (sum + coin[i] <= total) {     
//                         // 0  +  1     , 1
//                  console.log("about to recurse where sum(" + sum + ") + coin[i](" + coin[i] + ") is <= total")
//                  console.log("recurse(" + (sum + coin[i]) + ", " + i + ")")
//                   recurse(sum + coin[i], i)
//               }
//               console.log("i++ = " + (i + 1))
//               i++
//             }
//         } else {
//           console.log("pop off execution stack for (" + sum + "," + index + ")")
//           return;
//         }
//         console.log("pop off execution stack for (" + sum + "," + index + ")")
//     }

//     recurse(0, 0)
//     return count;
// };
// console.log(makeChange(4))

// recurse(0, 0)
// recurse(1, 0)
// recurse(2, 0)
// recurse(3, 0)
// recurse(4, 0). count = 1 
// recurse(2, 1)
// recurse(4, 1). count = 2

// recurse(3, 2)
// 









let makeChange = (total) => {
    let count = 0;
    const coin = [1,2,3];

    const recurse = (sum, index) => {
 
        if (sum === total) {
            count++;
        }

        if (sum < total) {
            let i = index;
            while(i < coin.length) {
              if (sum + coin[i] <= total) {     
                  recurse(sum + coin[i], i)
              }
              i++
            }
        } else {
          return;
        }
    }

    recurse(0, 0)
    return count;
};
console.log(makeChange(4))

// recurse(0, 0)
// recurse(1, 0)
// recurse(2, 0)
// recurse(3, 0)
// recurse(4, 0). count = 1 
// recurse(2, 1)
// recurse(4, 1). count = 2

// recurse(3, 2)
// 


