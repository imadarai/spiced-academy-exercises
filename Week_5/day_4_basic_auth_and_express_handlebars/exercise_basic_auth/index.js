//EXPRESS
const express = require("express");
const app = express();
//COOKIE PARSER
const cookieParser = require("cookie-parser");
//FS-READDIR
const fs = require("fs");
//BASIC AUTH MODULE
var basicAuth = require('basic-auth');

//////////////////////////////////////////////////
//                                              //
//             BASIC AUTH FUNCTION              //
//                                              //
// ///////////////////////////////////////////////
var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != 'discoduck' || creds.pass != '123') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials to see this stuff."');
        res.sendStatus(401);
    } else {
        next();
    }
};
app.use("/github_api",auth);
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
//                                              //
//       COOKIES REQURED BY ALL REQUEST         //
//                                              //
// ///////////////////////////////////////////////
app.use(cookieParser());
//////////////////////////////////////////////////
//               MIDDLEWARE                     //
//                Functions                     //
//                                              //
//           -- That we build --                //
// ///////////////////////////////////////////////
app.use((req, res, next) => {
    console.log("Our middleware is running!");
    if (!req.cookies.authenticated) {
        if (req.url !== "/cookie") {
            res.cookie("linkSaved", req.url);
            console.log(req.body);
            res.redirect("/cookie");
        } else {
            next();
        }
    } else {
        next();
    }
});
//////////////////////////////////////////////////
//            Give the proper path              //
//     EXPRESS.STATIC will render all the       //
//           CSS JS HTML, etc Files--           //
// ///////////////////////////////////////////////
app.use(
    express.static(__dirname + '/projects')
);
//////////////////////////////////////////////////
//                                              //
//       All GET and POST Requests per          //
//                   Exercise                   //
// ///////////////////////////////////////////////

//When User heads to /cookie
app.get("/cookie", (req, res) => {
    res.send(`
        <h1>In order to continue, you gotta feed me COOKIES</h1>
        <br>
        <form method="POST">
            <input type="radio" name="cookies" value="yes">FINE YOU CAN HAVE A COOKIE!<br>
            <br>
            <input type="radio" name="cookies" value="no">NO COOKIES FOR YOU!<br>
            <br>
            <input type="submit" value="Submit">
        </form>
        `);
});


//When User makes a post request on COOKIES PAGE
app.post("/cookie", (req, res) => {
    console.log(req.body);
    if (req.body.cookies === 'yes') {
        console.log("cookies have been accepted");
        //SET THE COOKIE TO TRUE
        res.cookie("authenticated", true);
        //REDIRECT TO HOMEPAGE
        res.redirect(req.cookies.linkSaved);

    } else {
        console.log("cookies have been denied");
        //SET THE COOKIE TO FALSE
        res.cookie("authenticated", false);
        res.send(`
            <h1>YOU SHALL NOT PASS.  <a href="/cookie/">CLICK HERE</a> TO RETHINK ABOUT FEEDING ME</h1>
            `);
    }
});


//When User requests homepage or slash(/) URL
app.get("/", (req, res) => {
    if (!req.cookies["authenticated"]) {
        res.cookie("redirect", "/");
        res.redirect("/cookie");
    } else {
        let allProjects = fs.readdirSync(__dirname + "/projects");
        let links = "";
        for (var i = 0; i < allProjects.length; i++) {
            links += `<li><a href="${allProjects[i]}">${allProjects[i]}</a></li>`;
        }
        res.send(`
            <!doctype html>
            <title>Imad's Portfolio</title>
            <h1>Imad's Portfolio at Spiced Academy</h1>
            <ul>${links}</ul>
        `);
    }
});

app.listen(8080, () => console.log("BASIC AUTH SERVER IS UP"));
