// Make a page that has on it an element that is 100px by 100px in size and has a
// solid black border. When the user mouses down on this box, its background should
// change to a randomly selected color. When the user mouses up on it, its
// background should change to another randomly selected color.
console.log("CONNECTED!!!");



var myBox = document.querySelector('div');
// console.log(myBox);


function changeColor () {
    var x = Math.floor(Math.random()*249);
    var y = Math.floor(Math.random()*249);
    var z = Math.floor(Math.random()*249);
    myBox.style.background = 'rgb('+ x + ',' + y + ',' + z + ')';

    // console.log('rgb('+ x + ',' + y + ',' + z + ')');
}


myBox.addEventListener("mousedown", changeColor);
myBox.addEventListener("mouseup", changeColor);
