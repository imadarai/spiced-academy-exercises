const http = require("http");
const fs = require('fs');
const url = require('url');


http.createServer((request, response) => {

    let body = "";

    //////////////////////////////////////////////////
    //                                              //
    //       REQUEST/RESPONSE ERROR HANDELING       //
    //                                              //
    // ///////////////////////////////////////////////
    request.on('error', err => {
        console.log("Error in Request: ", err);
    });
    response.on('error', err => {
        console.log("Error in Response: ", err);
    });

    //////////////////////////////////////////////////
    //                                              //
    //        Logging Method, URL & Heade           //
    //                                              //
    // ///////////////////////////////////////////////

    console.log(request.method, request.url, request.headers);

    logReq (request);

    //////////////////////////////////////////////////
    //                                              //
    //               CONDITION HANDLEING           //
    //                                              //
    // ///////////////////////////////////////////////
    if (request.method == "POST") {
        console.log('POST REQUEST');
        request.on('data', (chunk) =>{
            body += chunk;
        }).on('end', function() {
            console.log(body);
            response.setHeader("Location", '/');
            response.statusCode = 302;
            response.end();

        });
    }
    else if (request.method == "GET" || request.method == "HEAD"){
        response.setHeader('content-type', 'text/html');
        response.statusCode = 200;

        if (request.method == "GET"){
            response.end(
                `<!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!</p>
                </html>
            `);

        }
        else if(request.method == "HEAD"){
            response.end();
        }
    }
    else{
        response.statusCode = 405;
        response.end();

    }

}).listen(8080, () => console.log("Server is listening ..."));


//////////////////////////////////////////////////
//                                              //
//           Function to log Requests           //
//                                              //
// ///////////////////////////////////////////////


function logReq (request){

    // console.log(request.url);
    // console.log(request.headers);
    // console.log(`Request mothod: `, request.method);

    const filePath = "requests.txt";

    var dateData = `\tDate: ${ new Date() } \tMethod: ${request.method}\tURL: ${request.url}\tHeaders:  ${request.headers}\n\n`;
    try {
        fs.appendFileSync(filePath, dateData);
        console.log('The "data to append" was appended to file!');
    } catch (err) {
        console.log('There was an error while appending: ', err);
    }
}
