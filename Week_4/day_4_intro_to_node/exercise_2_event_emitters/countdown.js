const events = require('events');

function Countdown (secondsToLiftOff){
    this.seconds = secondsToLiftOff;

    this.tick = function(){
        if (this.seconds >= 0 ){
            ///
            var time = this;
            setTimeout(function() {

                time.emit('remainingSeconds', time.seconds);

                time.seconds --;

                time.tick();
            },
            1000);
        }
    };
    this.tick();
}

/// Set the prototype of the countdown object to an Events emitter.
Countdown.prototype = new events.EventEmitter();

/// Add the expotrs to the main js file.
module.exports.CountDown = Countdown;
