// Write a function that expects a string representing a class name to be passed
// as a parameter. The function should return an array containing all the elements
//  in the document that have the class that was passed in.


function allClasses(className) {

    //Creating Arr and assigning/selecting all classes specified
    var arr = document.getElementsByClassName(className);

    //creating an empty array
    var newArr = [];

    //looping through an array
    for (var i = 0; i < arr.length; i++) {
        //pushing value into the empty array
        newArr.push(arr[i]);

    }
    //returning values
    return newArr;
}
    
