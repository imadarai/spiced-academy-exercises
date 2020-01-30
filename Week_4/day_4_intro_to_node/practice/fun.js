console.log("I am fun.js");




////////////// Putting a Function in Node Module ////////////
// console.log(
//     "module.exports before: ", module.exports
// );
//
//
// module.exports.sayHello = function sayHello () {
//     console.log("say hello dear");
// };
//
//
// console.log(
//     "module.exports after: ", module.exports
// );




////////////// Alternative Way to write it ////////////

function sayHello () {
    console.log("hello everyone!");
}

module.exports.myFn = sayHello;
