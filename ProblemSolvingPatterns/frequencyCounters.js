// Example 1: Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. Order does not matter. 

/* 
Problem Review:
arr1 = [1,2,3], arr2 = [4,1,9] : TRUE
arr1 = [1,2,1], arr2 = [4,4,1] : FALSE. 1 has two appear twice in arr2 and 4 only once. the frequency matters
arr1 = [1,2,3], arr2 = [1,9] : FALSE. missing 4 in arr2.
arr1 = [a, 2, 3], arr2 = [4, 9] : FALSE? What happens if non numbers are in array? 
*/

//Solution #1 using nested loops = O(n^2)
const sameBIGON2 = (arr1,arr2) => {
  if(arr1.length !== arr2.length){
    return false;
}
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // indeoxOf is a for loop and in this case nested loop
    if(correctIndex === -1) {
        return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex,1)
}
  return true;
}

//Solution #2 using Frequency Counter Pattern = O(n) 
const sameBIGON = (arr1, arr2) => {
  if(arr1.length !== arr2.length){ //if arrays not same length, we cant have same frequency so return false and end.
    return false;
}
  //part 1
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  //part 2
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
}
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
}

//part 3
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){ //if obj1 key squared is not in obj2 return false.
        return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //if obj1[key] value (frequency) does not equal obj2[key squred] value (frequency) return false
        return false
    }
}
  return true //if all checks passed return true (arr1's elms are in arr2 and they are squared and occur the same amount of time (frequency is matched))
}