const Countdown = require('./countdown.js').CountDown;

const countdown = new Countdown(10);

countdown.on('remainingSeconds', function(timeLeft) {
    if (timeLeft > 0) {
        console.log(`Time left ${timeLeft}`);
    } else {
        console.log('lift off!');
    }
});
