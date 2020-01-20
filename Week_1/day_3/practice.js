

// function hurray(){
//     console.log("Hurray!");
// }
// hurray();

// (function(){
//     var name = "bob";
//     console.log(name);
// })();

//TIMEOUT
// var sayHi = function() {
//     console.log("hi");
// }
//
// setTimeout( sayHi, 2000);

// TIMEOUT
// var sayHi = function(name) {
//     console.log("hi" + name);
// }
//
// setTimeout( function(){
//     sayHi(bob);
//     sayHi(amy);
// }, 2000);


//INCURSION
// function countToTen(step){
//     console.log("Current step", step);
//
//     step++;
//     if (step <10){
//         countToTen(step);
//     }
// }
// countToTen(0);

// function doesntLeakArguments() {
//     var args = new Array(arguments.length);
//     for(var i = 0; i < args.length; ++i) {
//         args[i] = arguments[i];
//         console.log(i);
//     }
//     return args;
// }
//
// doesntLeakArguments(20);

//NESTED FUNCTION - ADD VALUE
// function getCounter(num) {
//     return function() {
//         return num++;
//     };
// }
//
// var counter = getCounter(3);
// console.log(counter()); //3
// console.log(counter()); //4
// console.log(counter()); //5
