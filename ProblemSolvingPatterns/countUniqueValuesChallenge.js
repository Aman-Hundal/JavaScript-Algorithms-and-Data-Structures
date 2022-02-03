// Count Unique Values Challenge with Multiple Pointers

const countUniqueValues = (sortedArr) => {
  let counter = 0;
  let p1 = 0;
  
  if (sortedArr.length === 0) {
    return 0;
  }

  // while (p2 < sortedArr.length) {
  //   if (sortedArr[p1] !== sortedArr[p2]) {
  //     counter += 1;
  //     p1 = p2;
  //     console.log(sortedArr[p1],sortedArr[p2])
  //   } else {
  //     p2++;
  //   }

  // }
  // return counter + 1;

  for (let p2 = 1; p2 < sortedArr.length; p2++ ) {
    if (sortedArr[p1] !== sortedArr[p2]) {
      counter += 1;
      p1 = p2;
    }
  }
  return counter + 1;
}

console.log(countUniqueValues([-2,-1,1,1,2,3]));

/*
Rules/Assumptions
- array will be sorted with only numbers in it and can contain negatives

Step 1: 
- return a count/sum of the numbers that only show up once (unique) in the passed in array. USE THE MULTIPLE POINTERS PATTERN.
- inputs - sorted array of numbers
- ouput - sum/integer value representing the unique numbers in the sorted array
- data = sorted array, a counter/sum to keep track of unique values, pointers
- it is a sorted array = meaning that duplicates of a number will be next to each other and this will continue until the next largest number comes up. 


Step 2: 
ex - [1,1,1,1,1,2] : 2 unique values (1,2)
ex - [1,2,3,4,4,4,7,7,12,12,13] : 7 unique values (1,2,3,4,7,12,13)
ex - [] : 0 unique values
ex - [-2,-1,-1,0,1] : 4 unique values

Step 3:
- set a counter value to equal 0; set pointer1 to 0 ; set pointer 2 to 1
- create a while loop? while p1 < arr.length
  - compaer p1 to p2:
    if p1 !== p2 ; counter += 1 and p1 = p2 p2 += 1
    else p2++

*/