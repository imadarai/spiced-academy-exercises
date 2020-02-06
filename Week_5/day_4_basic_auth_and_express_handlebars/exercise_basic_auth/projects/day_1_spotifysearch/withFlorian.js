console.log('Hello Beautiful!!');

(function() {

    var nextUrl;

    $('#submit-button').on('click', function() {

        var $userInput = $('input[name=user-input]').val();
        var $albumOrArtist = $('select').val();

        $.ajax ({
            url: "https://elegant-croissant.glitch.me/spotify",
            method: 'GET',
            data: {
                query: $userInput,
                type: $albumOrArtist
            },
            success: function(response) {
                response = response.artists || response.albums;

                $('#more').show();
                $('#results-for').html("Results for " + "'" + $userInput + "'");
                $('#results-for').show();

                var myHtml = " ";

                for (var i = 0; i < response.items.length; i++) {
                    //Handling Images
                    var imageUrl = 'default.png';
                    if (response.items[i].images[0]){
                        imageUrl = response.items[i].images[0].url;
                    }
                    //Handling Links
                    var spotifyLink = response.items[i].external_urls.spotify;

                    //Ineserting Response with Div to Container
                    myHtml +=
                    "<div id='spotify-display'><img src='" +
                    imageUrl +
                    "'><h3><a href ='" +
                    spotifyLink +
                    "'>" +
                     response.items[i].name +
                     "</a></h3></div>";
                }
                $('#results-container').html(myHtml);

                //Grabbing Next 20 results to display again upon clicking $moreResults button
                nextUrl = response.next && response.next.replace(
                    'https://api.spotify.com/v1/search',
                    'https://elegant-croissant.glitch.me/spotify'
                );
            }
        });
        $("#more").on("click", function() {
            $.ajax ({
                url: nextUrl,
                method: 'GET',
                data: {
                    query: $userInput,
                    type: $albumOrArtist
                },
                success: function(response) {
                    response = response.artists || response.albums;

                    $('#more').show();

                    var myHtml = " ";

                    for (var i = 0; i < response.items.length; i++) {
                        //Handling Images
                        var imageUrl = 'default.png';
                        if (response.items[i].images[0]){
                            imageUrl = response.items[i].images[0].url;
                        }
                        //Handling Links
                        var spotifyLink = response.items[i].external_urls.spotify;

                        //Ineserting Response with Div to Container
                        myHtml +=
                        "<div id='spotify-display'><img src='" +
                        imageUrl +
                        "'><h3><a href ='" +
                        spotifyLink +
                        "'>" +
                         response.items[i].name +
                         "</a></h3></div>";
                    }
                    $('#results-container').html(myHtml);

                    //Grabbing Next 20 results to display again upon clicking $moreResults button
                    nextUrl = response.next && response.next.replace(
                        'https://api.spotify.com/v1/search',
                        'https://elegant-croissant.glitch.me/spotify'
                    );
                }
            });

        });

    });

    //Version 1
    var url = window.location.href;
    // window.location.href('yes you can')
    var searchingFor = 'scroll=infinite';
    var isInfinitScroll = url.indexOf(searchingFor) >= 0;

    //Version 2
    // var urlParams = new URLSearchParams(location.search);
    // var contentOfSchoolPram = urlParams.get('scroll');

    if (isInfinitScroll) {

        setInterval (function() {

            if (!nextUrl) {
                console.log("No next URL set, I am out of here");
                return;
            }



            var windowPlusScrollTop = $(window).height() + $(document).scrollTop();
            var document_height = $(document).height();
            var reachedBottomOfPage = windowPlusScrollTop >= document_height - 400;

            if (reachedBottomOfPage && !isLoading){
                console.log("Hurray!");
                // loadNextResults();
            }
        }, 250);


    }







})();
