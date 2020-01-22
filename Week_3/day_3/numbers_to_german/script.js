console.log("Hello Beautiful");

(function() {

    var display = $('#display');
    var germanNumbers = ['EIN !', 'ZWEI !', 'DREI !', 'VIER !', 'FUNF !', 'SECHS !', 'SEIBEN !', 'ACHT !', 'NUEN !', 'ZEHN !'];

    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }

    transalateNumberToGerman();
    function transalateNumberToGerman () {
        try {
            var input = askForNumber();
            var output = germanNumbers[input - 1];
            display.html(output);
        }
        catch(e){
            console.log('Maybe you should Learn English first .... We asked for 1 through 10 ...');
            transalateNumberToGerman();
        }
    }

    setInterval(function(){
        window.location.reload(true);
    }, 5000);

}());
