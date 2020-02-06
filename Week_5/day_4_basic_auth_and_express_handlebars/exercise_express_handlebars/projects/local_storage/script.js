console.log("Hello Beautiful");


(function() {
    
    var $input = $('textarea');
    var setValue;

    $input.on('input', function () {

        setValue = $input.val();
        localStorage.setItem("saved", setValue);

    });

    $(document).ready(function(){
        try {

            $input.val(localStorage.getItem("saved"));

        } catch (e) {
            console.log("localstorage empty");
        }

    });
}());
