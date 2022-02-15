// Example 1: write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array. (array is does not need to be sorted)

// Solution (Naive) -  O(n^2) (done via a nested loop)
const maxSubArrayNaive = (arr, n) => {
  let maxSum = 0;
  // let counter = 0;

  if (arr.length === 0 || arr.length < n) {
    return null;
  }

  for (let i = 0; i < arr.length - n + 1; i++) { //the logic check i < etc is done to get the last subarray of n
    // counter += 1
    let currentMax = 0;
    // currentMax += arr[i];
    for (let j = 0; j < n; j++) {
      currentMax += arr[i+j]; //a way of summing n digits in a row
      // console.log(arr[i+j])
      if (currentMax > maxSum) {
        maxSum = currentMax;
      }
    }
  }
  return maxSum;
}
console.log(maxSubArrayNaive([2,6,9,2,1,8,5,6,3], 3));

//Solution 2 (Sliding Window Pattern) - O(n)
const maxSubArraySlidingWindow = (arr, n) => {
  let maxSum = 0;
  let currentSum = 0;

  if (arr.length === 0 || arr.length < n) {
    return null;
  }
  for (let i = 0; i < n; i++) { //this gets the sum of the first n elms in the array which we use to compare in the next loop
    maxSum += arr[i];
  }
  currentSum = maxSum;

  for (let i = n; i < arr.length; i++) { // this loop is the KEY loop in this pattern. NOTICE THAT WE START OUR i at index of N (we start out loop at n index as we already have the first n sum). We are going to add arr[n] which is index n and less arr[i-n] which is index 0 at first (then will index values will move with increase of i++)

    currentSum = currentSum - arr[i-n] + arr[i]; // take the first n sum and subtract arr[i-n] and add arr[i] -> this is the sliding window effect. This allows for us to not re add every single elm togehter again. Instead of calculating new n sums every time and starting from the beginning, we just use our originl sum and shift over the indecies (subtract arr[i-n] and ad arr[i]) for the new numbers like a sliding window to get the max Sum. CLose the left number/window, open a new window to a new number on the right

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  
  return maxSum;
}
console.log(maxSubArraySlidingWindow([2,6,9,2,1,8,5,6,3], 3));

// SLIDING WINDOW?? LEET CODE BUY SELL STOCK EXAMPLE USE WHILE LOOPS FOR SLIDING WINDOWS?
const maxProfit = function(prices) {
  let p1 = 0;
  let p2 = 1;
  let currentSum = 0;
  let maxSum = 0;

  while(p2 < prices.length) { //p2 is generally your point of interest for length or your while loop
    if (prices[p1] >= prices[p2]) { //this creates a new window (using below example 1 -> closes [7,1] opens [1,5]). THIS IS YOUR CONDITION TO OPEN/EXTEd/CLOSE WINDOW
      p1 = p2;
      p2++
    }
    if (prices[p1] < prices[p2]) { //this extends the window (using below example 1 -> extends [1,5,3], 7 IS IRRELEVANT NOW as its too high). THIS IS YOUR OTHER CONDITION TO OPEN/EXTEd/CLOSE WINDOW
      currentSum = prices[p2] - prices[p1];
      maxSum = Math.max(currentSum, maxSum);
      p2++;
    }
  }
  return maxSum;
};

console.log(maxProfit([5,2,4,1,2,3]))

//SOlution Example
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
