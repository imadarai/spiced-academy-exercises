module.exports = function fn(val) {
    //CASE 1 - Reverse a String
    if (typeof val == "string") {
        let array = val.split("");
        let reverseArray = array.reverse();
        let joinedArray = reverseArray.join("");
        return joinedArray;
    //CASE 2 - Reverse an arrays first argument
    } else if (Array.isArray(arguments[0])) {
        let emptyArray = [];
        for (var i = 0; i < arguments[0].length; i++) {
            emptyArray.push(fn(arguments[0][i]));
        }
        return emptyArray;//NOT TO EMPTY ANYMORE IS IT?
    } //Case 3 - do nothing
    return null;
};
