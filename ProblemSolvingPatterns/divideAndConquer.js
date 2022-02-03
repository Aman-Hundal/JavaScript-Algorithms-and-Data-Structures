//Example: Binary Serach Algo - given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found return -1.

//Solution - Divide and Conqer. O(logN)

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length -1;

  while (min < max) {
    let middle = Math.floor((min+max)/2);
    let currentElm = arr[middle];

    if (currentElm < val) { 
      min = middle + 1; //we ignore the numbers before the currentval by changing min
    }else if (currentElm > val) { 
      max = middle - 1; //we ignore the numbers after currentval by chaning max
    }else {
      return middle;
    }
  }
  return -1;
}

//Solution - Naive Appraoch. O(n)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}