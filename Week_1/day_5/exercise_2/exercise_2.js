// Write a function called invertCase that expects a string as a parameter. This
// function should return a new string with all the same characters as the string
// that was passed in but with the cases of the alphabetic characters switched.
// Uppercase characters should become lowercase and lowercase letters should
// become uppercase. Characters that are not alphabetic should not change. The
// toUpperCase and toLowerCase methods that all strings have will come in handy
// here.


function invertCase (x) {
    var output = "";

    for (var i = 0; i < x.length; i++) {

        if (x[i] === x[i].toLowerCase()) {
            output += x[i].toUpperCase();

        } else if (x[i] === x[i].toUpperCase()){
            output += x[i].toLowerCase();

        } else {
            output += x[i];
        }
    }

    //if x != .toUppercase

    console.log(output);
    return output;
}

invertCase('This is just MY test SENTence with 1845');
