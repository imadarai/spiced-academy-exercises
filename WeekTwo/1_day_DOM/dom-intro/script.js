console.log("sanity check!!");


//-----------------------------------------------------
// ------------- 5 Methods Targeting specific DOM nodes -----
//-----------------------------------------------------

//The first two methods return us a SINGLE NODE ....

//#1 Get an element by it's ID.

var mainHeading = document.getElementById('main-heading');
// console.log('mainHeading: ', mainHeading);

//#1  querySelect - this will return us the FRIST element it Finds.

var p = document.querySelector("section p");
// console.log("p :", p);


//The next 3 mehtods turn us Array like Objects ...

//#3 querySelectorAll - turns us all matching elements ..

var peas = document.querySelectorAll("section p");
console.log("pees: ", peas);


//#4 a way of getting elements by tag name ...

var lis = document.getElementsByTagName('li');
// console.log("lis: ", lis);

//#5 get all elements by a class name ...

var paras = document.getElementsByClassName("para");
// console.log("paras: ", paras);


//-----------------------------------------------------
// ------------- Styling DOM nodes -----
//-----------------------------------------------------

// console.log("mainHeading.style: ", mainHeading.style);

// mainHeading.style.background = "purple";
// mainHeading.style.color = "white";
// mainHeading.style.fontSize = "80px";

//We can't do it this way when it is in an array like object ...
// para.style.backgroundColor = 'red';

// paras[0].style.backgroundColor = 'red';

// for (var i = 0; i < paras.length; i++) {
//     paras[i].style.backgroundColor = 'red';
//     paras[i].style.color = "white";
// }


// Changint the HTML of an element ..

// document.querySelector('section').innerHTML = '<h3>Hello AllSpice</h3>';


//-----------------------------------------------------
// ------------- creating DOM nodes -----
//-----------------------------------------------------

// #1 Create the HTML element to add to the DOM (on screen)
// var myNewDiv = document.createElement('div');

// #2 Create the text we want to put in our new div ..
// var text = document.createTextNode('Loving Monday!!');

// #3 put the text into the div :)
// myNewDiv.appendChild(text);
//
//
// // #4 put them on the screen (in other words append them to the DOM)
// document.body.appendChild(myNewDiv);
