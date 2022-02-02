// Exmaple #1:
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if  a pair does not exist.

/*
Problem Review:

ex - [-3,-2,-1,0,1,2,3] : [-3,3]
ex - [-1,2,3] : undefined

*/

//Solution 1 - Naive Approach - O(n^2)

function sumArrayBase(arr) {
  const resultArr = [];
  for (let pointer1 = 0; pointer1 < arr.length; pointer1++) {
    for (let pointer2 = pointer1+1; pointer2 < arr.length; pointer2++) {
      if (arr[pointer1] + arr[pointer2] === 0) {
        resultArr.push(arr[pointer1]);
        resultArr.push(arr[pointer2]);
        return resultArr;
      }
    }
  }
  if (resultArr.length === 0) {
    return undefined;
  }
}

console.log(sumArrayBase([-3,-2,-1, 2,3,4]));

//Solution 2 - Multiple Pointers Pattern - O(n)

function sumArrayPointer(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) { //important 
    if (arr[p1] + arr[p2] === 0) {
      return [arr[p1], arr[p2]];
      break;
    } else if (arr[p1] + arr[p2] < 0) {
      p1++;
    } else {
      p2--;
    }
  }
}

console.log(sumArrayPointer([-3,-2,-1, 2,3,4]));