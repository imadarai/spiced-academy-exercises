function logType (x) {
    if (x === undefined){
        console.log("Undefined!");

    } else if (x === null){
        console.log("null!");

    } else if (typeof x === 'bigint'){
        console.log("BigInt!");

    } else if (typeof x === 'function') {
        console.log("function!");

    } else if (Array.isArray(x) === true) {
        console.log("array!");

    } else if (typeof x === 'object') {
        console.log("object!");

    } else if (typeof x === 'boolean'){
        console.log("boolean!");

    } else if (typeof x === 'string') {
        console.log("string!");

    } else if (isNaN(x) === true){
        console.log("not a number!");

    } else if (typeof x === 'number'){
        console.log("number!");

    } else {
        console.log("I have no idea!");
    }
}

logType();
logType(null);
logType(99);
logType(NaN);
logType('test');
logType(true);
logType(5n);
function fn() {}
logType(fn);
logType({});
logType([1,2,3]);




// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "bigint!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"
