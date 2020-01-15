// Make a page that has on it an element that is 200px by 200px in size and has a
// solid background color. Nest within that element another element that is 50px
// by 50px in size and has a different solid background color. When the user clicks
//  on the outer element its background color should change to a randomly selected
//  color. However, if the user clicks on the inner element, the inner element's
//  background color should change to a randomly selected background color but the
//  outer element's background color should not change at all.

console.log("CONNECTED!!!");



var outerBox = document.getElementById('boxOne');
var innerBox = document.getElementById('boxTwo');
// console.log(outerBox);
// console.log(innerBox);

function getcolor () {
    var x = Math.floor(Math.random()*249);
    var y = Math.floor(Math.random()*249);
    var z = Math.floor(Math.random()*249);
    var newColor = 'rgb('+ x + ',' + y + ',' + z + ')';
    return newColor;
}



outerBox.addEventListener("click",  function () {
    outerBox.style.background = getcolor();

});


innerBox.addEventListener("click", function  () {
    event.stopPropagation();
    innerBox.style.background = getcolor();
});
