
//Type of Function - to figure out what type of output I have.
function (x) {
    console.log (
        typeof x
    );
}

fn(10);


//Falsy Truthi
var a = null;
var b = 10

if (a && b) {
    console.log("yes");
} else {
    console.log("no")
}

if (a || b) {
    console.log("yes");
} else {
    console.log("no")
}


//for in loop

var o = {
    name: 'Imad',
    age: 28,
};
for (var prop in a){
    console.log(prop.o[prop]);
}
