(function(){

    //Grabbing Container Headline to animate
    var divContainer = document.getElementById('headlines');
    //Grabbing all the links inside the headline div
    var allLinks = divContainer.getElementsByTagName('a');
    //This is my start point on the viewport where my div is starting - extreme left
    var startPoint = divContainer.offsetLeft;

    var requestID ;



    //Define Animation funcitont that will move my elements to left
    function animateLeft (){

        //negative incrementing starting position to animate left
        divContainer.style.left = startPoint-- + 'px';

        //Logic when first link leaves the screen. Following makes sure its in negative pixels and then triggers the folowing
        if (startPoint + allLinks[0].offsetWidth <= 0){
            //Calculate the width of first element and assignt it to a variable
            var firstLinkWidth = allLinks[0].offsetWidth;
            //Adjust the starting point by adding it to the firstlink width
            startPoint += firstLinkWidth;
            //set the div starting position to the start point plus pixels
            divContainer.style.left = startPoint + 'px';
            //remove the first element and attach it to end (only use append, as removal happens automatically)
            allLinks[0].parentNode.appendChild(allLinks[0]);
        }
        //Why is it skipping?  log startPoint to see why it's skipping
        //console.log(startPoint);
        requestID = requestAnimationFrame(animateLeft);
    }

    animateLeft ();



    //EVENT LISTENERS

    //Creating a variable to store all the elements within the div tag
    var targetDiv = document.getElementById('headlines');
    // console.log(xyz);\

    //Adding an event listener to cancel Animation
    targetDiv.addEventListener('mouseover', function () {
        // console.log('I am here!');
        cancelAnimationFrame(requestID);
    });

    //Adding an event listener to restart animation
    targetDiv.addEventListener('mouseout', function() {
        animateLeft();
    });




})();
