// Write a function called getLessThanZero that expects an array of numbers to be
// passed to it and returns a new array containing only those numbers from the
// array that was passed in that are less than zero.
//
//    getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
//    getLessThanZero([1, 2]); //[]


function getLessThanZero(arr){

    var newArray = [];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0 ){
            newArray.push(arr[i]);
        }
    }
    
}


//TEST CODE
getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]
