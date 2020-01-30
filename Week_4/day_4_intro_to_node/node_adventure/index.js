const readline = require('readline');
const chalk = require('chalk');
const story = require ('./story.json')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startAdventure (myTale) {

    // console.log(myTale.answers[answer]);

    rl.question (myTale.q, answer => {

        if (myTale.answers[answer]) {

            if (myTale.answers[answer].q) {
                startAdventure(myTale.answers[answer]);
            } else {
                console.log(myTale.answers[answer]);
                rl.close();
            }

        } else {
            console.log("Not Much of a Know-It-All .. ");
            rl.close();
        }

    });


}

startAdventure(story);
