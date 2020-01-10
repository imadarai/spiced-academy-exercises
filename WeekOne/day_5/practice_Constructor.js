function Human(n) {
    this.breathesAir = true;
    this.eatsFood= true;
    this.breathersCarbon = false;
    this.name = n;
}

Human.prototype.hasHair = true;
Human.prototype.sleep = function sleep (){
    console.log('sleeeeeeeeeeP');
};

// function sleep(){
//     console.log('sleeeeeeeeeeeeeeeeeeeeeep');
// }

var leo = new Human('Leo');
var brad = new Human('Brad');

console.log(
    leo.constructor
);

// console.log(
//     leo.hasHair,
//     brad.hasHair,
//     leo.hasOwnProperty ('hasHair'),
//     leo.hasOwnProperty ('name'),
// );

// for (var prop in leo) {
//     console.log(prop);
// }

leo.sleep();

// leo.sleep();
// brad.sleep();
// console.log(
//     leo instanceof Human, brad instanceof Human
// );

// var margot = Object.create(leo);
//
// console.log(margot);
// margot.sleep();
