// mousedown on the slider and moves in the container
// update the width of the div and the left property of the slider
// offset x and y
//
// take the slider width in account when making sure it doesn't go overflow
//
// width()
// offset().left

(function() {
    var container = $('#container');
    var slider = $('#slider');
    var topImg = $('#top-image');


    topImg.css ({
        width: 300 + 'px'
    });

    slider.mousedown(function () {

        container.mousemove(function (e){

            if (e.clientX <= container.width() + container.offset().left -5 ) {

                slider.css ({
                    left: e.clientX - 10 + 'px'
                });

            }
            topImg.css ({
                width: e.clientX + 'px'
            });

        });

    });

    topImg.css ({
        width: 300 + 'px'
    });

}());
