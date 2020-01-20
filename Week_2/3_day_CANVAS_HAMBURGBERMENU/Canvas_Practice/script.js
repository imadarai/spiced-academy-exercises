console.log('Hello Beautiful!');

//1 Render teh Ccontext we will draw in
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//2 Begin the path
ctx.beginPath(0);


//3 optionally set color of line
ctx.strokeStyle = 'tomato';
ctx.lineWidth = 3;

//4 <pve tp starting Position
ctx.beginPath();
ctx.moveTo(50,50);

//5 start mapping your drawing point
ctx.lineTo(150,50);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
//in case you want to close that tipy gap in the trinagle corner:
ctx.closePath();

//6 actually draw the plan
ctx.stroke();

//7 optionally fill in with color
ctx.fillStyle = 'wheat';
ctx.fill();



//MY drawing
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(50,50);
ctx.lineTo(250, 150);
ctx.lineTo(450, 450);
ctx.lineTo(50,50);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = 'lime';
ctx.fill();



//DRAWING A CIRCLE
ctx.beginPath();
ctx.arc(100,100,25,0,2*Math.PI);
//args (x, y, radius, starting angle, end angle,)
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();
