//Challenge 1 - sameFrequency (Frequency Counter Pattern)

function sameFrequency(num1, num2) {
  const num1Obj = {};
  const num2Obj = {};

  if (num1.toString().length !== num2.toString().length) {
    return false;
  }

  for (let digit of num1.toString()) {
    if (num1Obj[digit]) {
      num1Obj[digit] += 1;
    } else {
      num1Obj[digit] = 1;
    }
  }
  for (let digit of num2.toString()) {
    if (num2Obj[digit]) {
      num2Obj[digit] += 1;
    } else {
      num2Obj[digit] = 1;
    }
  }
  for (let key in num1Obj) {
    if (!(key in num2Obj)) {
      return false;
    }
    if (num1Obj[key] !== num2Obj[key]) {
      return false
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true {1:2, 8:2, 2:2}

/*
Step 1: 
- Given two positive integers find out if the two numbers have the same frequency of digits. Must have O(n) complexity
- Compare two numbers and see if they have the same number of digits
- inputs = two numbers, positive
- outputs = boolean value (true or false)
- pieces of data = an object to keep track of each digit and its frequency + boolena output + two integers

Step 2: 
- function(182, 281) // true {1:2, 8:2, 2:2}
- function(34,14) // false {3: 1, 4: 2, 1:1}
- function (22, 222) // false

Step 3:
- create two objects to hold the frequencies and digits of each number
- make the two numbers into itterable values (either a sttring or array)
- for of loop through each itterabe number and
  - if the number is in the object frequency += 1
  - if the number is not in the obeject frequency = 1
- create a final for in loop to compare the keys and values (digits and their frequencies) of both objects - if key is not same or if frequenices are not same return false
- finaly return true at end of code indicating that digits have same digits and freuqneices
*/





//Challenge 3 - averagePair (Multiple Pointers Pattern)

//Challenge 4 - isSubsequence (Multiple Pointers Pattern)

//Challenge 5 - maxSubArraySum (Sliding Window Pattern)

//Challenge 6 - minSubArrayLen (Sliding Window Pattern)

//Challenge 7 - findLongestSubstring (Sliding Window Pattern)