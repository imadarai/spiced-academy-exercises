const http = require("http");

//const server = http.createServer((request, response));
const server = http.createServer((request, response)=> {

    request.on('error', err => {
        console.log("Err in request: ", err);
    });
    response.on('error', err => {
        console.log("Err in response: ", err);
    });

    console.log("request.url: ", request.url);
    console.log("request.method: ", request.method);
    console.log("request.headers: ", request.headers);

    // response.setHeader ("content-type", "text/html");
    // response.statusCode = 200;
    // // response.write('Happy HTTP Day!');
    // response.end(`
    //     <h1>Happy HTTP Day! :) </h1>
    //     `);

    if (request.method === "GET") {

        if (request.url === '/secret-page'){
            // would redirect them
            response.statusCode = 302;
            response.setHeader ('Location', '/');
            response.end();

        } else {
            response.setHeader ("content-type", "text/html");
            response.statusCode = 200;
            // response.write('Happy HTTP Day!');
            response.end(`
                <h1>Happy HTTP Day! :) </h1>
                `);
        }

    // if (request.method === "Get") {
    //     response.setHeader ("content-type", "text/html");
    //     response.statusCode = 200;
    //     // response.write('Happy HTTP Day!');
    //     response.end(`
    //         <h1>Happy HTTP Day! This was a GET Request:) </h1>
    //         `);
    // }
    } else if (request.method === 'POST') {
        console.log('You made a post request');

        let body = " ";

        request.on('data', chunk => {
            body+=chunk;
        });

        request.on('end', () => {
            console.log('body', body);
            response.setHeader ("content-type", "text/html");
            response.statusCode = 200;
            response.end(body);
        });




    } else if (request.method === 'PUT') {
        response.statusCode = 200;
        response.end(`<h2>You  just made a put request</h2>`);

    } else if (request.method === 'HEAD') {
        console.log('you made a head request');

    } else {
        console.log("you made another request");

    }

});

server.listen(8080, () => console.log("Server is listening ..."));
