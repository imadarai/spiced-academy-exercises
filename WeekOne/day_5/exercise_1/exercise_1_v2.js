// Write a constructor called Rectangle that accepts two numbers (width and height)
//  as parameters. Rectangle instances should have a method called getArea that
//  returns the instance's width multiplied by its height. Write another constructor
//  called Square that accepts one number (which will serve as both width and the
// height) as a parameter. Instances of Square should also have a getArea
// method but you should not rewrite the getArea function you wrote for
// Rectangle. Square instances should use the same getArea method that
// Rectangle instances do.
//
//  var square = new Square(4);
//  square.getArea(); //16
//
//  var rect = new Rectangle(4, 5);
//  rect.getArea(); //20
function Shape () {
    this.getArea = function (){
        return this.width * this.height;
    };
}

function Rectangle (width, height) {
    this.width= width ;
    this.height= height ;
}

function Square (sqr) {
    this.width= sqr ;
    this.height= sqr ;
}

Rectangle.prototype = new Shape;
Square.prototype = new Shape;



//TESTING CODE
var square = new Square(4);
console.log(square.getArea()); //16
var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20
