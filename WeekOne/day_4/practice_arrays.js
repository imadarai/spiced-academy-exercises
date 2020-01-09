// var colors =['cyan', 'magenta', 'teal', 'purple'];
//
// // Accessing items in an array
// // console.log(colors[0]);
// // console.log(colors[1]);
// // console.log(colors[2]);
// // console.log(colors[3]);
// //
// // // Length Property tells us how many items are in tan array
// // console.log(colors.length);
// //
// // // Accesing last items
// // console.log(colors[colors.length -1]);
//
// // PUSH & POP affect the END of arrays
// // Push will add an element to the end of array
// // colors.push('blue');
// // console.log(colors);
//
//
// // var pooped = colors.pop();
// // console.log('pooped: ', pooped);
// // console.log(colors);
//
//
// /////////////////SHIFT UNSHIFT//////////////////
// //UNSHIFT & SHIFT affects the beginning of arrays
// //UNSHIFT ADDS elemtn to beginning of array
// // colors.unshift('red');
// // console.log(colors);
//
// //Shift removes first element from the beginning of array
// // var shifty = colors.shift();
// // console.log('removed: ', shifty);
// // console.log(colors);
//
//
// /////////////////SPLICE//////////////////
// // SPLICE - it mutates / changes the original array - by removing things
// // Elements - FIRST: where to start - SECOND: how many items to remove - THIRD: put soemting in place
// // var removed = colors.splice(1, 2, 'black');
// // console.log('what we removed: ', removed);
// // console.log(colors);
//
// //IF YOU PASS ONLY ONE ARGUMENT: It will remove everythign that index forward
// // var removed = colors.splice(1);
// // console.log('what we removed: ', removed);
// // console.log(colors);
//
// /////////////////SLICE////////////////// Copies array and then some
// // - Does not mutate original array - copies entire array or secionts of arrays
// // console.log(colors);
// // //
// // var newColors = colors.slice();
// // console.log('newColors ', newColors);
//
// //ARGUMENTS: FIRST: where to start copying SECOND: where to stop but doesn't include that item
// // var newColors = colors.slice(0, 2);
// // console.log('newColors ', newColors);
//
// /////////////////indexOf//////////////////
// //tells you if item eists and it's position
// //if item doesn't exist, the value will ALWAYS be -1
// // console.log(colors.indexOf('purple')); //3
// // console.log(colors.indexOf('white')); //-1
//
//
// /////////////////FILTERS//////////////////
// //Filter - Does not mutate the original awway
// var longColorNames = colors.filter(function(color) {
//     return color.length > 4;
// });
// console.log(colors);
// console.log(longColorNames);
