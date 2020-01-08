// Write a function that expects a number as an argument.

//If the value that is passed in is less than 0, equal to 0, or not a number, the function should
// return the string 'ERROR'.

//If the number that is passed in is greater than or equal to 1000000 it should
// simply return the number.

//Otherwise it should multiply the number by 10 however many times it takes
//to get a number that is greater than or equal to 1000000 and return that.

function oneMillion(input){

    if (input <= 0 || Number.isNaN(input) === true || typeof input === 'string' ){
        return 'Error';

    } else if(input > 0 && input <1000000) {
        input = input * 10;
        return oneMillion(input);

    } else {
        return input;

    }
}


//TESTING CODE
console.log(oneMillion(-10)); //error
console.log(oneMillion(0));//error
console.log(oneMillion(NaN));//error
console.log(oneMillion('string'));//error

console.log(oneMillion(1000000)); //return value
console.log(oneMillion(1000010)); //return value
console.log(oneMillion(1000100)); //return value
console.log(oneMillion(2000100)); //return value
//
console.log(oneMillion(100)); //return 1000000
console.log(oneMillion(2)); //return 2000000
console.log(oneMillion(45)); //return 4500000
