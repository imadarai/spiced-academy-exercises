// Write a function that takes an array as a parameter and returns a new array
// containing all of the items that are in the array that was passed in but in
// reverse order. Unlike the reverse method that all arrays have, this function
// should leave the original array unchanged.

function reverseMyArray(arr) {

    var reverseArray = [];

    for (var i = 0; i < arr.length; i++){

        reverseArray.unshift(arr[i]);

    }

    console.log('New Array is ', reverseArray);

    return reverseArray;
}


//TESTING CODE
var orgArray = [1, 2, 3];
console.log('Original Array was: ', orgArray);
reverseMyArray(orgArray);
console.log('Checking Original to make sure it did not change: ', orgArray);
