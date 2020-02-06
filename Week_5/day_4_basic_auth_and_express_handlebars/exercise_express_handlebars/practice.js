const express = require('express');
const app = express();
const hb = require('express-handlebars');

//IMPORT JSON FILE///
const teachers = require('./data.json')
console.log(teachers);


//////////////////////////////////////////////////
//                                              //
//            We Need the following to          //
//        work with handlebars with express     //
// ///////////////////////////////////////////////
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');


app.use(express.static('./projects'));

app.get('/', (req, res) => {
    res.render("home", {
        layout: "main",
        //data we're sending to our 'home' template
        cohort: "Allspice",
        //sending an array of objects to my ome tempalte
        teachers
    });

});

app.get('/about', (req, res) =>{
    res.render("about", {
        layout: "main",
        emojis : [
            "😁",
            "😂",
            "🤑",
            "🥱"
        ]
    });

});


app.listen(8080, () => console.log("I'm ready to express with handlebars ..."));
