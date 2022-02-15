// Day 1 - Contains Duplicate
const containsDuplicate = function(nums) {
    const frequencyObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!frequencyObj[nums[i]]) {
            frequencyObj[nums[i]] = 1;
        } else {
            frequencyObj[nums[i]] += 1;
        }
    }
    
    for (let key in frequencyObj) {
        if (frequencyObj[key] > 1) {
            return true;
        }
    }
    return false;
};

// Day 1 - Maximum Subarray
const maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        currentSum = nums[i];
        maxSum = Math.max(maxSum, currentSum);
        for (let j = i + 1; j < nums.length; j++) {
            currentSum += nums[j]
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
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

//Day 3 Best Time to Buy and Sell Stock
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
console.log(maxProfit([5,2,4,1,2,3]));

// Day 6 First Unique Character

const firstUniqChar = function(s) {
    const charObj = {};
    
    if (s.length === 0) {
        return -1;
    }
    
    for (let char of s) {
        if (!charObj[char]) {
            charObj[char] = 1;
        } else {
            charObj[char] += 1;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charObj[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};

// Day 6 Ransom Note

const canConstruct = function(ransomNote, magazine) {
    const ransomNoteCharObj = {};
    const magazineCharObj = {};
    
    for (let char of ransomNote) {
        if (!ransomNoteCharObj[char]) {
            ransomNoteCharObj[char] = 1;
        } else {
            ransomNoteCharObj[char] += 1;
        }
    }
    
    for (let char of magazine) {
        if (!magazineCharObj[char]) {
            magazineCharObj[char] = 1;
        } else {
            magazineCharObj[char] += 1;
        }
    }
    
    for(let key in ransomNoteCharObj ) {
        
        if (!(key in magazineCharObj)) {
            return false;
        }
        if (ransomNoteCharObj[key] > magazineCharObj[key]) {
            return false
        }
    }

    return true;
};


// Day 6 Valid Anagram

const isAnagram = function(s, t) {
    let sCharObj = {};
    let tCharObj = {};
    
    if (t.length !== s.length) {
        return false;
    }
    
    for (let char of s) {
        if (!sCharObj[char]) {
            sCharObj[char] = 1;
        } else {
            sCharObj[char] += 1;
        }
    }
    
    for (let char of t) {
        if (!tCharObj[char]) {
            tCharObj[char] = 1;
        } else {
            tCharObj[char] += 1;
        }
    }
    
    for (let key in tCharObj) {
        if((!key in sCharObj)) {
            return false;
        }
        if (tCharObj[key] !== sCharObj[key]) {
            return false;
        }
    }
    
    return true;
};
