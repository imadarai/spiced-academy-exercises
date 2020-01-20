console.log("hello beautiful!");

var anyWhere = document.querySelector('body');
var activateMenu = document.getElementById('enter');
var hamburgermenu = document.getElementById('hamburgermenu');
var whiteMenu = document.getElementById('menu');
var exitMenu = document.getElementById('exit');


//activate Menu
activateMenu.addEventListener('click', function () {
    event.stopPropagation();
    hamburgermenu.classList.add('on');

});

//exit Menu
exitMenu.addEventListener('click', function() {
    event.stopPropagation();
    hamburgermenu.classList.remove('on');


});

//exit by clicking anywhere
anyWhere.addEventListener('click', function() {

    whiteMenu.addEventListener('click', function () {
        event.stopPropagation();
    });

    hamburgermenu.classList.remove('on');
});

//Dialog BOX


var dbox = $('#myDialog');
var span = $(".close");
// var whiteBox = $(".dialog-content");

dbox.ready(function () {

    setTimeout( function () {

        dbox.show();
        
    }, 1000);

    span.click(function(){
        dbox.hide();
    });

    // $('body').click(function(e){
    //     console.log('You are on the body');
    //     if (e.target == whiteBox){
    //         console.log('You are on the whitebox');
    //         dbox.show();
    //     }
    //     dbox.hide();
    // });
});
