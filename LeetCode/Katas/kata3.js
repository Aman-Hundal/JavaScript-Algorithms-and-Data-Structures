// count the number of vowels that appear in a given string

const numberOfVowels = (data) => {
  const cleanData = data.toLowerCase();
  let vowelCounter = 0;
  const vowelObj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }

  for (let char of cleanData) {
    if (vowelObj[char] === 0) {
      vowelObj[char] += 1
    }
  }

  console.log(vowelObj)

  for (let key in vowelObj) {
    vowelCounter += vowelObj[key]
  }


  // for (let char of cleanData) {
  //   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  //     vowelCounter += 1;
  //   }
  // }

  return vowelCounter;
}

console.log(numberOfVowels("Orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); //5 


/*
Step1:
- write a function that returns the number of times a vowel appears in a given string. vowels = a,e,i,o,u
- input = string
- output sum/number
- edge cases
  - capital letters? to get around this, make the string entirely a lower case in the beginning
-data = stirng as input, sum/counter as a number, possibly an object or array to verify vowels instead of if checks?

Step2:
console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); //5 

Step3:
- create a sum/counter to keep track of vowels
- create an object with the vowels and their values to 0 ??? CAN for loop the array add += 1 if the char exists in the object. Once complete you can do a for in loop serach all the keys (which are vowels) which will get the values to add to sum
- ORR just for loop through the string and if char equals any vowel += sum

*/