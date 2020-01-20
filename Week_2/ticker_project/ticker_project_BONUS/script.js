(function(){


    var divContainer = document.getElementById('headlines');
    var allLinks = divContainer.getElementsByClassName ('top');
    var startPoint = divContainer.offsetLeft;
    var requestID ;

    function animateLeft (){

        divContainer.style.left = startPoint-- + 'px';

        if (startPoint + allLinks[0].offsetWidth <= 0){
            var firstLinkWidth = allLinks[0].offsetWidth;
            startPoint += firstLinkWidth;
            divContainer.style.left = startPoint + 'px';
            allLinks[0].parentNode.appendChild(allLinks[0]);
        }
        requestID = requestAnimationFrame(animateLeft);
    }

    animateLeft ();

    //--------------------------------------------------------------------//

    var footerContainer = document.getElementById('footlines');
    var footerLinks = footerContainer.getElementsByClassName ('bottom');
    var endPoint = footerContainer.offsetLeft;
    var requestFootID ;



    function animateRight() {

        footerContainer.style.left = endPoint++ + 'px';

        // if () {
        //  
        // }

        requestAnimationFrame(animateRight);
    }

    animateRight();





































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
