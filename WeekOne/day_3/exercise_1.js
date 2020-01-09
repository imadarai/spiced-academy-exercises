// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.
//
// sum(5, 10); //15
//
// sum(5, 10, 15); //30;
//
// sum(5, 10, 15, 100, 200); //330

function sum(){

    var totalSum = 0;

    for(var i = 0; i < arguments.length; ++i) {
        totalSum += arguments[i];
    }
    console.log("Total Sum of Arguements is" + " " + totalSum);
    return totalSum;

}


sum(5, 10);
sum(5, 10, 15);
sum(5, 10, 15, 100, 200);
