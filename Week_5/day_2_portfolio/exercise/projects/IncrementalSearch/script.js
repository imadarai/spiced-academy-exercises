console.log('Hellow Beautiful!!');

(function() {
    var countries = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ];

    var $inputField = $('#search-text');
    var $results = $('#results');

    //React to user $inputField
    $inputField.on('input', function (){

        //Get the user inputer
        var userInput = $inputField.val();
        //If there is nothign in the input field - abort
        if (!userInput){
            $results.html(" ");
            return;
        }

        //Filter the country List
        var matchingCountries = countries.filter(function(country) {

            var lowerCaseInput = userInput.toLowerCase();
            var lowerCaseCountry = country.toLowerCase();

            var inputInCountryPosition = lowerCaseCountry.indexOf(lowerCaseInput);

            if (inputInCountryPosition == 0){
                return true;
            } else {
                return false;
            }
        });
        //Limit to Four Countries
        matchingCountries = matchingCountries.slice(0,4);

        //Output my results to the #results div
        var resultList = '';

        if(matchingCountries.length == 0){
            //render the no results message
            resultList += "<div class=\"noresult\">No results.</div>";
        } else {
            //render the results
            for (var i = 0; i < matchingCountries.length; i++) {

                resultList += "<div>" + matchingCountries[i] + "</div>";
            }
        }


        $results.html(resultList);
        $results.show();


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
