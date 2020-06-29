/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var n1 = {
  letters: ["G", "H", "I"],
  idx : -1
};
var n2 = {
  letters: ["0"],
  idx : -1
};
var n3 = {
  letters: ["T", "U", "V"],
  idx : -1
};

var n4 = {
  letters: ["D", "E", "F"],
  idx : -1
};


[{
  letters: ["G", "H", "I"],
  idx : -1
},
{
  letters: ["0"],
  idx : -1
},{
  letters: ["T", "U", "V"],
  idx : -1
},
{
  letters: ["D", "E", "F"],
  idx : -1
}]


"325"

var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var arrOfObj = [];
  var result = [];

  // create an array of objects
  digitString.split("").forEach(digit => {
    var obj = {};
    obj["letters"] = phoneDigitsToLetters[digit].split("");
    obj["idx"] = -1;
    arrOfObj.push(obj);
  })
 
// ____________________________________________________________

  if(arrOfObj.length === 1){
    result = arrOfObj[0].letters;
  } else {
    var nexted = false;
    var done = false;
    var permutation = [];

    while(!done){
      for(var i = arrOfObj.length - 1; i >= 0; i--){
        var target = arrOfObj[i]
        if(!nexted){
          target.idx = target.idx + 1;
          permutation.unshift(target.letters[target.idx]);
          if(target.idx === target.letters.length - 1){
            target.idx = -1;
          }
          if(target.idx !== -1){
            nexted = true;
          }
        } else {
          permutation.unshift(target.letters[target.idx]);
        } 

      }
      if(!nexted){
        done = true;
      }  
    }

  }

  console.log("hello")
};



















