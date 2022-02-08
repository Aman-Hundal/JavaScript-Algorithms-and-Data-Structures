//Challenge 5 - maxSubArraySum (Sliding Window Pattern)

function maxSubarraySum(arr, targetLength) {
  let maxSum = 0;
  let currentSum = 0;

  if (arr.length < targetLength || isNaN(targetLength)) {
    return null;
  }

  for (let i = 0; i < targetLength; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = targetLength; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr [i-targetLength]//minus previous number add current number to get next currentsum.
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2))

/*
time complexity - O(n) space complexity - O(1)
Step1:
- Given an array of integers and a number, write a function which finds the max sum of a subarray with the length of the number passed to the function
- Function receivees a array of numbers and another number. Find the highest/max total subarray using the number as the length for the subaray
- NOTE - the subarray must consist of consecutive elms from the original array
- inputs -> unordered array of integers and a number representing length of subaarray
- outputs -> sum of best/max subarray or null if incorrect value passed in (ie. length of array is < number, or array is blank or number/arget is missing)
- data - integer + array for inputs. outputs is null or a integer. sliding door = 

Step 2:
- function([100,200,300,400], 2) // 700 [300,400]
- function ([1,4,2,10,23,3,1,0,20] 4)  // 39 [4,2,10,23]
- function([-3,4,0,-2,6,-1], 2) // 5 [6,-1]
- function([2,3], 3) // null

Step3:
- setup max and current sums 
- do a if check to rule return null for edge cases (ie. array length is < length or length passed in is blank or array is empty)
- get the max sum of the first consecutive numbers using the following for loop:
  - let i = 0; i < length; i++
- currentSum = maxSum
- for loop through entire array with i starting at length mark; i< array.length; i++
  - currentSum = subtract last index elm and add current index elm. Essentially make new window by shifting indecies forward by one.
  - if currentSum > maxSum ; currentSum = maxSum
*/

