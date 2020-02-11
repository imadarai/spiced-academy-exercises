const express = require ('express');
const app = express();
const { getToken, getTweets, filterTweets } = require('./twitter.js');
const { promisify } = require("util");

app.use(express.static('./ticker_files'));


let fnToken = promisify(getToken);
let fnTweets = promisify(getTweets);
// let fnFilteredTweets = promisify(filteredTweets);

app.get('/data.json', (req, res) => {

    fnToken()
        .then( token => {
            return fnTweets(token);
        })
        .then( tweets => {
            res.json(filterTweets(tweets));
        })
        .catch(err => {
            console.log('err in Promises: ', err);
            res.sendStatus(500);
        });
});

app.listen(8080, ()=> console.log("Twitter is tweeeting"));
