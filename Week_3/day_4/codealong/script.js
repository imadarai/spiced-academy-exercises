console.log('Hello Beautiful');
(function() {

    var $container = $('container');


    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/magikarp',
        method: 'GET',
        timeout: 2000, //If it takes more than 250 seconds just ignore this.
        data: {
            limit: 20
        },
        success: function(data) {
            console.log(data);
        },
        error: function(){
            console.log('Something is less than optimal.');
        }
    });






}());
