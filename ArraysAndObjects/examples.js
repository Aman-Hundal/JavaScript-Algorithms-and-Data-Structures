//BigO and Objects

const instructor = {
  firstName: "John",
  lastName: "Doe",
  isInstructor: true,
  favoriteNum: [1,5]
}

//checking to see if true is a value in our K:V pairs = O(n) and linear
//all other basic tasks like removal, updating, inserting and retrieving to and from an object is constant O(1)
//most of the common object built in methods are O(n) -> like .keys, .values, .entries

//BigO and Arrays
const names = ["Michael", "Jim", "Pam"];

//accessing an elm in a array is O(1)
//adding/inserting to the end of an array is O(1), however inseting to the bgn of an array is O(n). the reason for this is due to the indicies. When inserting an elm to the bgn of the array we have to re-index all of the elms after for that array. Therefore n of array matters
// the amount it takes roughly grows in proportion to the size of the array (n). The same rules of above go for removing from an array
//overall push and pop faster than shift and unshift
//seraching is O(n)