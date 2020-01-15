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
