//Anagram Challenge using Frequency Counter Pattern

const validAnagram = (str1,str2) => {
  const string1Obj = {};
  const string2Obj = {};
  const string1Arr = str1.split("");
  const string2Arr = str2.split("");

  for (let char of string1Arr) {
    if (string1Obj[char]) {
      string1Obj[char] += 1;
    } else {
      string1Obj[char] = 1;
    }
  }

  for (let char of string2Arr) {
    if (string2Obj[char]) {
      string2Obj[char] += 1;
    } else {
      string2Obj[char] = 1;
    }
  }
  
  for (let key in string1Obj) {
    if (!(key in string2Obj)) {
      return false;
    }
    if (string1Obj[key] !== string2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", ""))

/*
Rules/Assumptions:
- inputs are all lowercase, no punctuation, no spaces, no numbers.
- essentially data is all clean


Step1:
- Problem = given two strings find out if they are anagrams. Anagrams mean SAME LETTERS APPEAR EXACT SAME AMOUNT OF TIMES. return true if anagram is valid or return false
- inputs - 2 strings that are under above rules/assumptions
- outputs - booleans
- the inputs dont determine the ouputs 1:1. We need to take the string and turn them into objs to compare efficiently.

Step2:
◦ str1 = "", str2 = "" : True
◦ str1 = 'aaz', str2 = 'zza' : False
◦ str1 = 'rat', str2 = 'car' : False
◦ str1 = 'awesome', str2='awesom' : False
◦ str1 = 'anagram', str2 = 'nagaram' : True
◦ str1 = 'cat', str2 = 'cat' : True

Step3:
- create two objects to store the two strings
- use .split on two strings
- for loop through each stringarray and check to see if key exists in obj. If its does += 1 to the value, if not value = 1
- once objects are complete
 - for in loop through the keys of obj1, 
- check to see if the keys in obj1 === keys in obj 2 if not return false. 
- then check to see if values of obj1[key] === values of obj2[key] if not return false
- finally, return true in the for in loop at end to confirm that the obj1 and obj2 are similar in keys and values and the two strings are annagrams

*/