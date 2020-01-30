// console.log("this file is being run by node");
//
// console.log("__dirname:", __dirname);
//
// console.log("__filename:", __filename);


// console.log("process.argv: ", process.argv[2]);
//node index.js "hello allspice"
// return a third array item - hello allspice
// console.log("module", module);

// const funStuff = require("./fun.js");
//
// console.log("funStuff: ", funStuff);
//
// // funStuff.sayHello();
//
// funStuff.myFn();



//////////////////////////////////////////////////
//                                              //
//          FOR TODAYS EXERCISE                 //
//                                              //
// ///////////////////////////////////////////////

// const url = require ('url');
// console.log(
//     url.parse("http://127.0.0.1:8080/test?a=100&b=200")
// );


//////////////////////////////////////////////////
//                                              //
//          CORE MODULE QUERY STRING            //
//           for assignment today               //
// ///////////////////////////////////////////////
//  const qs = require('querystring');
//
// console.log(
//     qs.parse('?scroll=infinite&name=pete')
// );

//////////////////////////////////////////////////
//                                              //
//                 NPM PACKAGING                //
//                                              //
// ///////////////////////////////////////////////


// const chalk = require('chalk');
//
// console.log("I am a boring color ....");
//
//
//
// console.log(
//     chalk.red('I am very red')
// );


//////////////////////////////////////////////////
//                                              //
//                Synch vs Async                //
//                                              //
// ///////////////////////////////////////////////

// 1. EVENT IMMITERS


// console.log("I am some amazing code running in tehis program");
//
// process.on('allSpice', function (){
//     console.log("DONT EAT ALL THE SPICES");
// });
// process.emit('allSpice');
//
//
// process.on('beforeExit', function (){
//     console.log("I am just about to exit the Program");
// });


// 2. CALLBACKS

// function getUser (callback) {
//     setTimeout (function () {
//         const user =  {
//             name: 'Imad',
//             age: 32
//         };
//         callback(user);
//     }, 2000);
// }
//
// getUser(function(myUserData) {
//     console.log("myUserData ", myUserData);
// });


































//
