//Challenge 6 - minSubArrayLen (Sliding Window Pattern)

function minSubArrayLen(arr, target) {

}

/*
time complexity - O(n) space complexity - O(1)
Step1:
- write a function which accepts two params - a positive array and a positive integer. Function should return the min length of a contigious subarray of which the sum is greater than or equal to the integer passed to the function. IF there isont one, return 0 instead
- a function that takes in an array of integers and a target sum. Return the legnth of the MINIMUM SUBARRAY that is equal to or greater than the target
- inputs - > array of positive integers (not sorted), positive number. 
- ouputs -> LENGTH of the minimal array that is greater than or equal to the target
- Edge cases
  - empty array, target is 0, negative numbers, non numbers in array

Step2:
- function([2,3,1,2,4,3], 7) // 2 [4,3] -> because [4,3] is the smallest subarry that equals 7
- function([2,1,6,5,4], 9) // 2 [5,4] -> again like above
- function ([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
  - what if 61 is in the above array? 
  - what number is picked? Assume first largest number or assume the largest number is picked

Step3:
-
*/

//Challenge 7 - findLongestSubstring (Sliding Window Pattern)