console.log('Hellow Beautiful!!');

(function() {

    var $inputField = $('#search-text');
    var $results = $('#results');

    //React to user $inputField
    $inputField.on('input', function (){

        //Get the user inputer
        var userInput = $inputField.val();

        //AJAX Request
        $.ajax({
            url: 'https://flame-egg.glitch.me/',
            method: 'Get',
            data: {
                q: userInput
            },
            success: function(response) {
                //Output my results to the #results div
                var resultList = '';

                // if (userInput != response ){
                //     return;
                // }
                if (userInput != $inputField.val()){
                    return;
                }

                if(response.length == 0){
                    //render the no results message
                    resultList += "<div class=\"noresult\">No results.</div>";
                } else {
                    //render the results
                    for (var i = 0; i < response.length; i++) {

                        resultList += "<div>" + response[i] + "</div>";
                    }
                }
                $results.html(resultList);
                $results.show();


            }
        });
    });

    //User clicks outside: hide the $results
    $inputField.on('blur', function() {
        $results.hide();
    });

    //User clicks inside: show the result
    $inputField.on('focus', function(){
        $results.show();
    });

    //Mouseover: highlight current country
    $results.on('mouseenter','div', function(e){
        $('.active').removeClass('active');
        $(e.target).addClass('active');
    });

    //use the up and down key to move the selector up and down

    //Listen to keyboard events
    $(document).on('keydown', function(e){

        //KeyCode Variables
        var userHitUpArrowKey = e.keyCode == 38;
        var userHitDownArrowKey = e.keyCode == 40;
        var userHitEnterKey = e.keyCode == 13;

        //Declaring Jquery Objects
        var $current = $('.active');
        var $previous = $current.prev();
        var $next = $current.next();

        //Declaring First and Last Options
        var $firstCountry = $results.children().first();
        var $lastCountry = $results.children().last();

        var somethingIsSelected = $current.length > 0;

        if (userHitEnterKey && somethingIsSelected) {
            var selectedCountryText = $current.text();
            $inputField.val(selectedCountryText);
            $results.hide();
        }

        if (userHitDownArrowKey){
            if (!somethingIsSelected){
                $firstCountry.addClass('active');
            } else {
                $current.removeClass('active');

                if ($next.length == 0){
                    $firstCountry.addClass('active');
                } else {
                    $next.addClass('active');
                }
            }
        }

        if (userHitUpArrowKey){
            if(!somethingIsSelected){
                $lastCountry.addClass('active');
            } else {
                $current.removeClass('active');
                if ($previous.length == 0){
                    $lastCountry.addClass('active');
                } else {
                    $previous.addClass('active');
                }

            }
        }

    });


    //User clicks result => Use this as the value of the input field
    $results.on('mousedown','div', function(e){

        var $current = $(e.target);
        var selectedCountryText = $current.text();

        $inputField.val(selectedCountryText);
    });

    $(document).on('transitioned', function () {
        $results.hide();
    });


}());
