//Lecture - Big O Notation

//solution 1:
function addUpToA(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
//speed performance of code
// const t1A = performance.now() //tells you the time in miliseconds since your doc was created and ran
// addUpToA(1000000000);
// const t2A = performance.now()
// console.log(`${(t2A-t1A)/1000} seconds`)

//simple operations
/*
 += i is n additions and n assignemtns (as n grows and the larger value of n there are more additions and assignemtns)
 i++ is n additions and n assignments
 total = 0 is 1 assignemnt
 let i = 1 is 1 assignemnt
i<= 1 is n comparisons
conclusion = 5n + 2 (if n = 10 operations = 52)
BigO notation = O(n) (linear) - simplified BigO notation 
*/
// runtime grows relative to input n

//solution 2:
function addUpToB(n) {
  return n * (n + 1) / 2;
}
//speed performance of code
const t1B = performance.now() 
addUpToB(1000000000);
const t2B = performance.now()
console.log(`${(t2B-t1B)/1000} seconds`)

//simple operations
// *, + and / are the only operations the computer has to do
// if n is 2 or 10000, there are only going to be 3 operations
//conclusion = 3 operations
//BigO notation = O(1)(constant) - simplfiied BigO notation

//example 3:
function printPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i,j)
    }
  }
}
// this is a quadratic/exponential trend. Runtime is exponential (n^2) as  input n grows
// BigO notation = O(n^2)
// its a O(n) operation (a loop) inside another O(n) operation (another loop) = O( n*n) or O(n^2)
