//Challenge 4 - isSubsequence (Multiple Pointers Pattern)

function isSubsequence(strOne, strTwo) {
  let charTracker = strOne.length;
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < strTwo.length; i++) {
    if (strOne[p1] === strTwo[p2]) {
      charTracker -= 1;
      p1 ++;
      p2 ++;
    } else {
      p2++;
    }
  }

  if (!charTracker) {
    return true;
  } else {
    return false;
  }

}

console.log(isSubsequence('abc', 'abracadabra'))

/*
must have O(n+m) time complexity and o(1) space complexity
Step1: 
- Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
- write a functions that returns true or false if letters in string one subseuqnetly line up with letters in another string (order matters)
- input - two strings - assume only strings taken (no other vals) -> what to do with blakn strings, symbols and white spaces? what to do with upper case?
- ouput - boolean value (true or false)
- data pieces - result = boolean, inputs = strings (do we need to make into arrays?), p1 and p2 for multiple pointer pattern

Step2: 
- function('acb', 'abc') // FALSE (order matters)
- function('abc', 'abracadabra') // TRUE ABraCadabra
- function ('hello', 'hello world') // TRUE
- function('sing', 'string') // TRUE StING

Step3
- what to do with blakn strings, symbols and white spaces? what to do with upper case? - > FIX THIS AFTER
-  create p2 to reprenset index 0 in second string, create p1 to represent index 0 in first string
- for loop through string 2; i < string.length; i ++ 
 - if string1[p1] === string2[p2]
  p1++


  - for loop through stirng 2 and as long as p2 < lenght do below
- take string1[0] and check to see if it equals string2[0]
 - if so p1 ++ and p2 ++ also tracker (which is length of arr is -1)
 - if not p2 ++
 - once loop complete check your string counter if !== 0 return false;  if 0 return true
*/

