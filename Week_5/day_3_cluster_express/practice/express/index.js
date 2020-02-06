const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


//////////////////////////////////////////////////
//           this is a  MIDDLEWARE              //
//       THIS GRABS AN INPUT, PARSES IT,        //
//            AND DELIVERS TO US                //
//                -- BUILT IN --                //
// ///////////////////////////////////////////////
app.use(
    express.urlencoded({
        extended: false
    })
);

//////////////////////////////////////////////////
//               MIDDLEWARE                     //
//                Functions                     //
//                                              //
//           -- That we build --                //
// ///////////////////////////////////////////////
app.use((req, res, next) => {
    console.log("Our middlewatre is running!");
    next();

});


//////////////////////////////////////////////////
//                                              //
//                     COOKIES-                 //
//                                              //
// ///////////////////////////////////////////////
app.use(cookieParser());


//////////////////////////////////////////////////
//            Give the proper path              //
//     EXPRESS.STATIC will render all the       //
//           CSS JS HTML, etc Files--           //
// ///////////////////////////////////////////////
app.use(
    express.static(__dirname + '/public')
);



//////////////////////////////////////////////////
//                                              //
//                  RES.SEND                    //
//                                              //
// ///////////////////////////////////////////////
app.get('/', (req, res) => {
    console.log("GET request to / happened");
    console.log("req URL: ", req.url); //still available to us in express
    console.log("req.method: ", req.method); //still available to us in express
    //req.cookieS so you can ready a cookie
    console.log("What cookies looke like: ", req.cookies);
    res.send(`<h1>Express is amazing</h1>`);
});

//////////////////////////////////////////////////
//                                              //
//               RES.SENDFILE                   //
//                                              //
// ///////////////////////////////////////////////
app.get("/about", (req, res) =>{

    //SEtting up a COOKIE using res.cookie
    res.cookie('authenticated', true);

    console.log("GET request to /about happened");
    res.sendFile( __dirname + "/index.html");
});


//////////////////////////////////////////////////
//                                              //
//               DYNAMIC ROUTING                //
//                                              //
// ///////////////////////////////////////////////
app.get("/about/:name", (req, res) => {
    console.log("GET request to /about/:name happened!!!");
    console.log(("req.params: ", req.params));
    res.send(`
        <p>Word you just entered int eh URL was <strong>
        ${req.params.name}</strong></p>
        `);
});


//////////////////////////////////////////////////
//                                              //
//           POST REQUEST WITH FORM             //
//                                              //
// ///////////////////////////////////////////////
app.get("/add-cute-animal", (req, res) =>{
    res.send(`
        <form method='POST'>
            <input type ='text' name ="animal" placeholder = "animal" autocomplete = "off">
            <input type="text" name="score" placeholder="score">
            <button> submit </button>
        </form>
         `);
});

//////////////////////////////////////////////////
//                                              //
//           POST REQUEST using Req.BODY        //
//                                              //
// ///////////////////////////////////////////////
app.post("/add-cute-animal", (req, res) =>{
    console.log("POST request to /add-cute-animal happened!");
    console.log("req.body : (from app.use) : ", req.body);

    res.send(`
        <p>The animal was <strong>${req.body.animal}</strong> and it's cuteness score is <strong>${req.body.score}</strong></p>
        `);

});



app.get("/secret-page", (req, res) => {
    console.log("What is my cookie: ", req.cookies);

    if (req.cookies.authenticated){
        res.send (`
            <p>Super Secret Stuff</p>
            `);
    } else {
        res.redirect('/about');
    }

});



app.listen(8080, () => console.log("My First Express Server is up! "));
