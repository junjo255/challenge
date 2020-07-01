/**
 791. Custom Sort String
 S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

 S was sorted in some custom order previously. We want to permute the characters of T so
 that they match the order that S was sorted. More specifically, if x occurs before y in S,
 then x should occur before y in the returned string.

 Return any permutation of T (as a string) that satisfies this property.

 Example :
 Input:
 S = "cba"
 T = "abcd"
 Output: "cbad"
 Explanation:
 "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
 Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.


 Note:

 S has length at most 26, and no character is repeated in S.
 T has length at most 200.
 S and T consist of lowercase letters only.
 */



 var customSortString = function(S, T) {
   let tArray = T.split("");
   let sArray = S.split("");
   let exist;

   for(let i = 0; i < sArray.length; i++) {
     let charIdx = tArray.indexOf(sArray[i]);
     if(charIdx >= 0) {
       exist = true;
       tArray.splice(charIdx, 1);
       while(exist) {
         exist = false;
         if(tArray.indexOf(sArray[i]) >= 0) {
           exist = true;
           tArray.splice(tArray.indexOf(sArray[i]), 1);
           sArray.splice(i, 0, sArray[i]);
           i++;
         }
       }
     }else{
       sArray.splice(i, 1);
       i--;
     }
   };
   return sArray.join("") + tArray.join("");
};

 customSortString("cbahjkl", "abcdsf")