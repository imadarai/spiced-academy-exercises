// var person = {
//     firstName: 'Andrea',
//     lastName: 'Arias',
//     age: 30,
//     hasPets: true,
//     "pet's name": 'Layla',
//     address: {
//         streetname: 'Main St',
//         number: 24,
//         zip: 55555,
//         city: 'Berlin'
//     },
//     sayHello: function() {
//         console.log(this.firstName + " says hellow");
//     },
//     test: undefined,
// };
//
//
// //USING DOT NOTATION to access value in object
// // console.log(person.firstName);
// // console.log(person["pet's name"]);
// // console.log(person.address);
// // console.log(person.address.city);
// // person.sayHello();
//
// // console.log(person.amazong); // True
// // console.log(person.test); // False
//
// /////////////////IN OPERATOR//////////////////
// //checks if porerty actually eists
// // TRUE - if it does
// // FALSE - if it doesn't
// //only checks 1 layer deep
// // console.log('test' in person);
// // console.log('zip' in person.address);
// // console.log('amazing' in person);
//
//
// /////////////////DELETE OPERATOR//////////////////
// // var deleted = delete person.test; //true
// // console.log(deleted);
//
//
// /////////////////UPDATE AN OBJECT//////////////////
// 
// // person.address.number = 50;
// // console.log(person);
//
//
// /////////////////CREATING AN OBJECT//////////////////
//
// // var obj1 = {};
// // var obj2 = Object();
// // var obj3 = new Object();
// //
// // console.log (obj1, obj2, obj3);
// //
// // var proto = {
// //     x: 1,
// //     y: true,
// //     z: function(){
// //         console.log('Its almost lunchtime');
// //     }
// // };
// //
// // var newObj = Object.create(proto);
// //
// // console.log(newObj.x);
//
// /////////////////Looping through AN OBJECT//////////////////
//
// for (var prop in person) {
//     console.log(person[prop]);
// }
