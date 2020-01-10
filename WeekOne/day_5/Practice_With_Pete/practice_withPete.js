//Declaring a Variable
var x ;
var doubleX;

//Assign a value to X
x = 101;

//Function to multiply by Two
function timesTwo (num) {
    return num = num * 2;
}

//Pass x as an argument and store  in Double X
doubleX = timesTwo(x);
console.log(doubleX);

// Declare a variable named Numbers
var numbers;

// Assign numbers an array that contains x and doubleX
numbers = [x, doubleX];

//Loop through numbers and print the value in log  //////PANIC
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Overnight numbers with an empty Object
numbers = { };

//Give numbers a property name y and set the value of double x to Variable
numbers = {
    y: doubleX,
};
