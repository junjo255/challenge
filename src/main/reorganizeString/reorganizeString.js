/**
 767. Reorganize String

 Given a string S, check if the letters can be rearranged so that
 two characters that are adjacent to each other are not the same.

 If possible, output any possible result.
 If not possible, return the empty string.

 Example 1:

 Input: S = "aab"
 Output: "aba"
 Example 2:

 Input: S = "aaab"
 Output: ""
 Note:

 S will consist of lowercase letters and have length in range [1, 500].

 */


const reorganizeString = str => {
  let obj = {};
  let result = [];

  str.split("").forEach(char => {
    if(obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });

  const checkToDelete = key => {
    if(obj[key] === 0) {
      delete obj[key];
    }
  };

  while(result.length < str.length && result !== "") {
    let objArr = Object.keys(obj);
    if(objArr.length === 1 && obj[result[result.length - 1]] > 1) {
      result = "";
    } else if(objArr.length === 1) {
      result.push(objArr[0]);
    } else {
      let highest = objArr.reduce((a, b) => {
        return obj[a] >= obj[b] ? a: b;
      });

      if(highest === result[result.length - 1]) {
        let temp = Object.assign({}, obj);
        delete temp[highest];
        let secondHighest = Object.keys(temp).reduce((a, b) => {
          return obj[a] >= obj[b] ? a: b;
        });
        result.push(secondHighest);
        obj[secondHighest]--;
        checkToDelete(secondHighest);
      } else {
        result.push(highest);
        obj[highest]--;     
        checkToDelete(highest); 
      }
    }
  }
    return result === "" ? "" : result.join("");
}



