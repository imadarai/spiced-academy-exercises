// Write a constructor called Countdown that accepts a single argument - the number
//  of seconds to count down. It should be possible to call the start method of
//  instances of Countdown to initiate the countdown. Once the countdown starts,
//  it should count down to zero starting with the number that was passed to the
//  constructor and logging each number to the console with a one second delay.


function Countdown(seconds) {
    this.start = function() {
        setTimeout( function countCycle () {
            if (seconds >= 0) {
                console.log(seconds);
                seconds --;
                setTimeout(countCycle, 1000);
            }
        }, 1000);
    };
}


//Testing Code
var countdown = new Countdown(5);
countdown.start();
