/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    var arr = [];

  // add an item to the top of the stack
    this.push = function(value) {
      arr.push(value);
    };

  // remove an item from the top of the stack
    this.pop = function() {
      arr.pop();
    };

  // return the number of items in the stack
    this.size = function() {
      return arr.length;
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return Math.min(...arr);
    };

  };

