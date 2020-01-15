console.log('Hello Beautiful!');

var canvasInner = document.getElementById('canvas-inner');
var canvasOuter = document.getElementById('canvas-outer');

var stickMan = canvasInner.getContext('2d');
var copyStickman = canvasOuter.getContext('2d');


//////////////////////STICKMAN////////////////////////
//HEAD
stickMan.beginPath();
stickMan.arc(400,120,80,0,2*Math.PI);
stickMan.stroke();

//lefteyes
stickMan.beginPath();
stickMan.arc(375,110,15,0,2*Math.PI);
stickMan.stroke();

//righteyes
stickMan.beginPath();
stickMan.arc(425,110,15,0,2*Math.PI);
stickMan.stroke();


//smile
stickMan.beginPath();
stickMan.arc(400,150,10,0,1*Math.PI);
stickMan.stroke();

//body
stickMan.beginPath();
stickMan.moveTo(400,200);
stickMan.lineTo(400,500);
stickMan.stroke();

//leftArm
stickMan.beginPath();
stickMan.moveTo(400,250);
stickMan.lineTo(250,150);
stickMan.stroke();

//RightArm
stickMan.beginPath();
stickMan.moveTo(400,250);
stickMan.lineTo(550,150);
stickMan.stroke();

//leftLeg
stickMan.beginPath();
stickMan.moveTo(400,500);
stickMan.lineTo(250,650);
stickMan.stroke();

//rightLeg
stickMan.beginPath();
stickMan.moveTo(400,500);
stickMan.lineTo(550,650);
stickMan.stroke();

//////////////////////Copying my StickMan //////////////////

var x = 0;
var y = 0;
var w = 550;
var h = 650;
copyStickman.drawImage(canvasInner, x,y);

//
// //////////////////////moving my stickman////////////////////////
//
document.addEventListener('keydown', function () {

    if (event.keyCode === 38) {
        copyStickman.clearRect(x, y, w, h);
        y = y  - 10;
        copyStickman.drawImage(canvasInner, x,y);
    }
    else if (event.keyCode === 40) {
        copyStickman.clearRect(x, y, w, h);
        y = y  + 10;
        copyStickman.drawImage(canvasInner, x,y);
    }
    else if (event.keyCode === 37) {
        copyStickman.clearRect(x, y, w, h);
        x = x  - 10;
        copyStickman.drawImage(canvasInner, x,y);
    }
    else if (event.keyCode === 39) {
        copyStickman.clearRect(x, y, w, h);
        x = x  + 10;
        copyStickman.drawImage(canvasInner, x,y);
    }

});


//
//////////////////////start the party////////////////////////

//Grab my elements
var button = document.querySelector('button');
var backgroundColor = document.querySelector('body');
//Set the Canvas Backgroun to White
canvasOuter.style.background = 'white';

//Upon Clicking - change Colors
button.addEventListener('click', function () {

    setTimeout ( function rainbow () {
        backgroundColor.style.background = getcolor();
        canvasOuter.style.background = getcolor();
        setTimeout (rainbow, 175);
    }, 175);

});

function getcolor () {
    var x = Math.floor(Math.random()*249);
    var y = Math.floor(Math.random()*249);
    var z = Math.floor(Math.random()*249);
    var newColor = 'rgb('+ x + ',' + y + ',' + z + ')';
    return newColor;
}



//Upon Clicking - make my stickman dance

button.addEventListener('click', function () {

    setTimeout (function dance () {

        copyStickman.clearRect(x, y, w, h);
        x = x  - 10;
        y = y - 10;
        copyStickman.drawImage(canvasInner, x,y);
        x = x  + 10;
        y = y + 10;
        copyStickman.drawImage(canvasInner, x,y);

        setTimeout ( dance, 175);
    }, 175);

});
