// Repeating Numbers

const repeatNumbers = (data) => {
  let resultString = "";

  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      resultString += ", "
    }
    for (let j = 0; j < data[i][1]; j++) {
      resultString += data[i][0]
    }
  }
  return resultString;
}

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292

/*
Step1:
- write a function that takes in an array of arrays where each sub-array will have two values. The first value in each subarry is the value to be reapted and the second value is the amount of times to repeat the value. Output a string with each values repeated the appropaite amount of times, each string must be seperaed by a ", ". If only one subarray -> no comma 
- inputs = an array of array with n number of sub arrays (arrays are made up of numbers)
- output = string of each subarray (seperated by comma if multiple and no comma if there is just one set of data)
- data = empty string to keep track of the output, array of sub arays , subarrays
- edge cases:
  - empty sub array passed in? 
  - repeater (second value) is not a number?
  - empty array?

Step2:
console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292

Step3:
- create an empy string to keep track of values 
- for loop through the sub array (let i = 0)
  - for let j = 0 ; j < array[i][j][1]; j++ {empty string += array[i[j][0]]}
 - add in a if in the first loop (if i > 1 empty string +=",")
- return empty string 

*/