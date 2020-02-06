console.log("Hello Beautiful");

(function() {

    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }

    var $display = $('#display');
    var germanNumbers = ['EIN !', 'ZWEI !', 'DREI !', 'VIER !', 'FUNF !', 'SECHS !', 'SEIBEN !', 'ACHT !', 'NUEN !', 'ZEHN !'];


    function transalateNumberToGerman () {
        try {
            var input = askForNumber();
            var output = germanNumbers[input -1];
            return output;

        } catch (err){
            console.log('Error', err);
            return transalateNumberToGerman ();
        }
    }


    $display.html(transalateNumberToGerman());


})();
