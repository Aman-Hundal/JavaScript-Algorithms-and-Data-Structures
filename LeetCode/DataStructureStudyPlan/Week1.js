// Day 1 - Contains Duplicate
 const containsDuplicate = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true;
          }
      }
  }
    return false;
};

// Day 1 - Maximum Subarray
const maxSubArray = function(nums) {

};
//Stretch -> Make O(n) solution

// Day 2 - Two Sum
const twoSum = function(nums, target) {
  const resultArr = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              resultArr.push(i);
              resultArr.push(j);
          }
      }
  }
  return resultArr;
};
//ouput = an array with the indcies of two numbers that add up to the target
//Stretch -> Make a solution thats less than O(n^2) time complexity

// Day 2 -Merge Sorted Array
const merge = function(nums1, m, nums2, n) {
  nums1.splice(m)
  
  for (let j = 0; j < n; j++) {
      nums1.push(nums2[j])
  }
  
  nums1.sort((a,b) => a-b);
};

//ouput -> merged array of num1 and nums 2, ARRAY of numbers. ORDERED IN ACENDING (lowest to highest)
// input -> m represnts the length of the nums1 array want to merge and n represent the length fo the nums 2 array we want to merge
// steps: 1. create three empty arrs. one to hold nums 1 m elms and two to hold nums 2 n elms, finally a merged array
//2. loop through nums 1 and push all elms of m to arrOne, do same to arrTwo
// 3. merge arrays with another loop, then do sort command on final return
//Stretch - Find solution with O(m+n) time complexity

//Day 3 - Intersection of Two Arrays II

const intersect = function(nums1, nums2) {
    const resultArr = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                resultArr.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return resultArr;
};

//Day 3 - Best Time to Buy and Sell Stock