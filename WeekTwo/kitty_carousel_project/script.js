(function() {

    var kitties = document.getElementsByTagName('img');
    var active = 0;

    document.addEventListener('transitionend', function(e){

        if (e.target.classList.contains("offscreen-left")) {

            e.target.classList.remove("offscreen-left");

            setTimeout(moveKitties, 1000);
        }
    });

    function moveKitties () {
        kitties[active].classList.remove('onscreen');
        kitties[active].classList.add('offscreen-left');

        active++;

        if (active == kitties.length) {
            active = 0;
        }
        kitties[active].classList.add('onscreen');

    }

    setTimeout(moveKitties, 1000);

}());




// Version 2
// (function() {
//
//     var kitties = document.getElementsByTagName('img');
//     var active = 0;
//
//     setTimeout(moveKitties, 1000);
//
//     document.addEventListener('transitionend', function(e){
//
//         if (e.target.classList.contains("offscreen-left")) {
//
//             e.target.classList.remove("offscreen-left");
//
//             setTimeout(moveKitties, 1000);
//         }
//     });
//
//     function moveKitties (inLine) {
//         kitties[active].classList.remove('onscreen');
//         kitties[active].classList.add('offscreen-left');
//
//         if(typeof inLine === 'undefined'){
//             active++;
//             if ( active>= kitties.length){
//                 active = 0;
//             }
//         } else {
//             active = inLine;
//         }
//
//         kitties[active].classList.add('onscreen');
//     }
//
// }());
