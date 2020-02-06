(function(){

    //Grabbing Container Headline to animate
    // var divContainer = document.getElementById('headlines');
    var divContainer = $('#headlines');
    //Grabbing all the links inside the headline div
    // var allLinks = divContainer.getElementsByTagName('a');
    var allLinks = $('a');
    //This is my start point on the viewport where my div is starting - extreme left
    // var startPoint = divContainer.offsetLeft;
    var startPoint = divContainer.offset().left;


    var requestID ;



    //Define Animation funcitont that will move my elements to left
    function animateLeft (){

        //negative incrementing starting position to animate left
        divContainer.css ( {
            left: startPoint-- + 'px'
        });
        var firstLinkWidth = $('a').eq(0).outerWidth();
        console.log(firstLinkWidth);
        console.log(startPoint);
        //Logic when first link leaves the screen. Following makes sure its in negative pixels and then triggers the folowing
        if (startPoint + $('a').eq(0).outerWidth() <= 0){


            //Adjust the starting point by adding it to the firstlink width
            startPoint = startPoint + firstLinkWidth;
            //set the div starting position to the start point plus pixels
            divContainer.css ( {
                left: startPoint + 'px'
            });

            //remove the first element and attach it to end (only use append, as removal happens automatically)
            $('#headlines').append($('a').eq(0));
        }
        //Why is it skipping?  log startPoint to see why it's skipping
        //console.log(startPoint);
        requestID = requestAnimationFrame(animateLeft);
    }

    animateLeft ();



    //EVENT LISTENERS

    //Creating a variable to store all the elements within the div tag
    // var targetDiv = document.getElementById('headlines');
    // var targetDiv = $('#headlines');
    // console.log(xyz);\

    //Adding an event listener to cancel Animation
    divContainer.on('mouseover', function () {
        // console.log('I am here!');
        cancelAnimationFrame(requestID);
    });

    //Adding an event listener to restart animation
    divContainer.on('mouseout', function() {
        animateLeft();
    });




})();
