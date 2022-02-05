//Challenge 4 - isSubsequence (Multiple Pointers Pattern)

function isSubsequence(strOne, strTwo) {

}


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
- what to do with blakn strings, symbols and white spaces? what to do with upper case?
- 

*/

