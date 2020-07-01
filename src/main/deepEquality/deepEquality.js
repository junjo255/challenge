/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  let aProps = Object.getOwnPropertyNames(apple);
  let bProps = Object.getOwnPropertyNames(orange);
  let isEqual = true;

  const checkIfObj = prop => {
    if(prop !== 'object' && prop !== null) {
      return false;
    }
    return true;
  }

  if(aProps.length !== bProps.length) {
    return false;
  }

  for(let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    if(!checkIfObj(apple[propName]) && !checkIfObj(orange[propName])) {
      if(apple[propName] !== orange[propName]) {
        isEqual === false;
      }
    } else {
      
    }
  }

  return isEqual;

};
