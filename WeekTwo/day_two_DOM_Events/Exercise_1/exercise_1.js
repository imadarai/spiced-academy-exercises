// Make a page that has on it an element that is 100px by 100px in size, has
// absolute positioning, and has a solid background color. Add an event handler
// that makes this box center itself directly under the user's mouse pointer as it
// is moved across the screen.


var box = document.getElementById('box');
// console.log(box);

document.addEventListener("mousemove", function(followMe) {

    box.style.left = followMe.clientX - 50 + 'px';
    // console.log(box.style.left);

    box.style.top = followMe.clientY - 50 + 'px';
    // console.log(box.style.top);



});
