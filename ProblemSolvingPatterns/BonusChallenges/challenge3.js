//Challenge 3 - averagePair (Multiple Pointers Pattern) 

const averagePair = (sortedArr, target) => {
  let p1 = 0;
  let p2 = sortedArr.length-1;

  for (let i = 0; i < sortedArr.length; i++) {
    let avg = (sortedArr[p1] + sortedArr[p2]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      p1++
    } else {
      p2--
    }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));

/*
must have O(n) time complexity  and o(1) space complexity
Step1: 
- Given a sorted array of ints and a target average, detemrmine if there is a pair of values in the array where the avg of the pair equal equals the target avg. There may be more than one pair that matches the avg target. 
- Take an array thats from smallest to largest, and check to see if a pair of ints avg in that array is equal to the target which is passed in along with array
  - avg = p1 + p2 / 2
- inputs - target, and sorted array. ALL NUMBERS
- ouputs - boolean value (true or false)
- data piecces - target = number, array = sorted numbers, result = boolean, p1 and p2 for multiple pointers pattern

Step2:
- avgPair([1,2,3], 2.5) // true (2,3 is the pair)
- avgPair([1,3,3,5,6,7,10,12,19], 8) // true (6,10 is the pair)
- avgPai([-1,0,3,4,5,6], 4.1) // false

Step3:
- make a pointer for second point which reprsent end of array
- for loop the array -> p1 = 0; as long as p1 < p2 do the loop; p1++
  - take the avg of two points
  - if avg is bigger than target, move the p2 index at end down one
  - if avg is smaller than target, move the p1 index up one 
  - if === target return true
- return false at end meaning no pair was found to match target
*/