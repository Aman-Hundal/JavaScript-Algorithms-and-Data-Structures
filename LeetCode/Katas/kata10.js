// const avgPair = (data, target) => {
//   let p1 = 0;
//   let p2 = data.length - 1

//   for (let i = 0; i < data.length; i++) {
//     let avg = (data[p2] + data[p1]) / 2;

//     if (avg === target) {
//       return true;
//     }

//     if (avg > target) {
//       p2--;
//     }

//     if (avg < target) {
//       p1++
//     }
//   }

//   return false;
// }

// return avgPair([1,2,3], 2.5)) // true (2,3 is the pair)
// return avgPair([1,3,3,5,6,7,10,12,19], 8)) // true (6,10 is the pair)
// return avgPair([-1,0,3,4,5,6], 4.1)) // false

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
- as it is sorted array, created two pointers. One for edn of array, one for begiign 
- us a for loop adding the p1 + p2 / 2 -> use a if statement to compare to the sum
 -  if the sum is too small move up p1, if it is too big move down p2
 - if sum matches return true
- return false at end of loop to confirm no match
*/


//create a superclass called dog that has a breed, name and barks woof. Then create a sub class ofg dog

// CLASSES REVIEW

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type
  }

  talk() {
    return `My name is ${this.name}`
  }

}

class BullDog extends Animal {
  eat() {
    return `${this.name} ate food.`
  }

  talk() {
    return `Woof ${super.talk()}`
  }
}

const myDog = new BullDog("Binky", "Bulldog")
console.log(myDog.talk())
console.log(myDog.eat())


// PROTOTYPE REVIEW

const animal = {
  init: function(name, type) {
    this.name = name;
    this.type = type;
    return this
  },
  talk: function() {
    console.log(`I am a ${this.type}. My name is ${this.name}`);
  },
  eat: function() {
    console.log("I ate food")
  }
}

const binky = Object.create(animal).init("Binky", "Bulldog")




console.log(binky.__proto__)
binky.talk()
console.log(binky.type)
binky.eat()
