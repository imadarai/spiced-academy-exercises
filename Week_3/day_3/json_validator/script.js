console.log("Hello Beautiful");

// Grab all the objects
var jsonInput = $('textarea');
var validateButton = $('#validate');
var clearButton = $('#clear');
var text;

jsonInput.on('input', function () {
    text = jsonInput.val();
});


//VALIDATE BUTTON CLCKED TRIGGERS THE TRY AND CATCH TO CHECK FOR JSON
validateButton.on('click', function() {
    try {
        JSON.parse(text);
        alert("It's a JSON OBJECT");
    } catch(e) {
        alert("YOU MESSED UP... IT IS NOT A JSON OBJECT");
    }

});


// Clear button should clear the input field
clearButton.on('click', function() {
    jsonInput.val(" ");

});
