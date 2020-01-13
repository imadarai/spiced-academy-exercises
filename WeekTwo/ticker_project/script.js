(function(){
    var headlines = document.getElementID('headlines');
    //Getting links from html
    var links = headlines.getElementsByTagNames('A');

    //starting position
    var left = headlines.offsetLeft;

    console.log(left);

    moveHeadlines();

    function moveHeadlines() {
        left --;

        //Increase the left position by the width of the first headlines before removing the first link.
        if (left <= - links[0].offsetwidhth) {
            //it's time to remove the first link and make it the last
        }

        //set style of headlines leement so that the left of css property equales to the left variable
        console.log(left);
        requestAnimationFrame(moveHeadlines);
    }

})();
