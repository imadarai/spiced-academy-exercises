// Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.
//
//  waitThenRun(function() {
//      console.log('Hello!');
//      waitThenRun(function() {
//          console.log('Goodbye!');
//      }); // logs 'Goodbye!' 1.5 seconds later
//  }); // logs 'Hello!' 1.5 seconds later


function waitThenRun(timeFn){

    setTimeout(timeFn, 1500);
}

waitThenRun(function() {
    console.log('Hello!');
    waitThenRun(function() {
        console.log('Goodbye!');
    }); // logs 'Goodbye!' 1.5 seconds later
}); // logs 'Hello!' 1.5 seconds later
