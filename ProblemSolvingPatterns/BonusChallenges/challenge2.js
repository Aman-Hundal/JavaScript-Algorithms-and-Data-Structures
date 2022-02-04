//Challenge 2 - areThereDuplicates (Frequency Counter OR Multiple Pointers Patterns). time - o(n) and space o(n)

const areThereDuplicates = (...args) => { // ...args accepts infinite args and allows them to be accessible in the function as an array.
  const frequencyObj = {};

  for (let arg of args) {
    if (!frequencyObj[arg]) {
      frequencyObj[arg] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", 1,300,3, "b"))

/*
Step 1: 
- function which accepts a variable number of args, and checks whether there are any duplicates among the args passed in.
- write a functions that takes in n args and checks to see if there are duplicates in the passed in args. Return true/false
- inputs - n amount of args 
  - args can be most of the primitive types (number, string, bool, null, undefined, bigInt, symbol  )
  - or just numbers and strings and bool
  - can args be a mix of primitives? (ie. numbers and strings)
- outputs - boolean values (true if any duplciates, false if no duplicates)
- data - ints, strings = inputs, bool = outputs, object if frequency counter pattern used, p1/p2 for args if multiple pointers pattern used

Step 2: 
- function(1,2,3) // false
- function (1,2,2) // true
- function ('a', 'b', 'c', 'a') // true
- function ('a','c', 1, 'a', 3) // true
- function ('c', 'e', 1, 1000, true, 1000) // false??

Step 3:
- assuming that the args are only numbers and strings AND can be mixed
- will use frequency counter pattern
- create an obj that holds the arg and its frequency
- for loop through the args (which is now an array due to ...args) and 
  - if arg is not in obj obj[arg] = 1
  - if arg is in obj return true;
- return false at end indicating that there are no duplicates
*/


//Challenge 3 - averagePair (Multiple Pointers Pattern)

//Challenge 4 - isSubsequence (Multiple Pointers Pattern)

//Challenge 5 - maxSubArraySum (Sliding Window Pattern)

//Challenge 6 - minSubArrayLen (Sliding Window Pattern)

//Challenge 7 - findLongestSubstring (Sliding Window Pattern)