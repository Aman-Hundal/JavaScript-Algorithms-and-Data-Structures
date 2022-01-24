/* Question 1: Time complexity of: 

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

Answer = O(n)
*/

/*
Question 2: Time complexity of :

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}

Answer = O(1)
*/

/*
Question 3: Time complexity of :

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

Answer = O(n)
*/

/*
Question 4: Time complexity of :

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

Answer = O(n)
*/

/*
Question 5: Time complexity of :

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

Answer = O(n^2)
*/