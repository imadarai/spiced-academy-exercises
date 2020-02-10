(function(){

    var divContainer = $('#headlines');
    var startPoint = divContainer.offset().left;
    var allLink = $('a');
    var requestID ;

    //AJAX CALL
    $.ajax({
        url: 'data.json',
        method: 'GET',
        success: function (data) {

            var newLinks = " ";
            for (var i = 0; i < data.length; i++) {
                var links = data[i].url;
                var title = data[i].title;
                // newLinks += ("<a href=\"" + links + "\">" + title + "</a>");
                newLinks += `<a href="${links}" target="_blank">${title}</a>`;
            }

            divContainer.html(newLinks);

        },
        error: function(){
            console.log('Something is less than optimal.');
        }
    });

    function animateLeft (){

        divContainer.css ( {
            left: startPoint-- + 'px'
        });
        var firstLinkWidth = $('a').eq(0).outerWidth();
        // console.log(firstLinkWidth);
        // console.log(startPoint);

        if (startPoint + $('a').eq(0).outerWidth() <= 0){

            startPoint = startPoint + firstLinkWidth;
            divContainer.css ( {
                left: startPoint + 'px'
            });

            $('#headlines').append($('a').eq(0));
        }

        requestID = requestAnimationFrame(animateLeft);
    }

    animateLeft ();



    //EVENT LISTENERS
    divContainer.on('mouseover', function () {
        cancelAnimationFrame(requestID);
    });

    divContainer.on('mouseout', function() {
        animateLeft();
    });

})();
