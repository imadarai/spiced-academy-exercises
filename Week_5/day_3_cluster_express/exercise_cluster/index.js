const http = require("http");
const fs = require('fs');
const path = require('path');
const homepage = require('./homepage'); //homepage.js
const cp = require('child_process'); //cluster.js

const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
};

http.createServer((request, response) => {
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
    //       Handeling Request other than GET       //
    //                                              //
    // ///////////////////////////////////////////////
    if (request.method != 'GET'){
        response.statusCode = 405;
        return response.end();
    }

    //////////////////////////////////////////////////
    //                                              //
    //               HOMEPAGE MODULE                //
    //                                              //
    // ///////////////////////////////////////////////
    if (request.url == '/') {
        response.setHeader('Content-Type', 'text/html');
        return response.end(homepage());
    }

    //////////////////////////////////////////////////
    //                                              //
    //          Setting the FilePath for FS         //
    //                                              //
    // ///////////////////////////////////////////////
    const filePath = `${__dirname}/projects${request.url}`;
    console.log("My current file path is: ", filePath);

    //////////////////////////////////////////////////
    //                                              //
    //          NORMALIZE FILE PATH IN CASE         //
    //           SOMEONE IS TRYING TO HACK          //
    // ///////////////////////////////////////////////
    if (!path.normalize(filePath).startsWith(`${__dirname}/projects/`)) {
        response.statusCode = 403;
        console.log("INTRUDER!!!");
        return response.end();
    }

    //////////////////////////////////////////////////
    //                                              //
    //     FS. STAT MODULE TO READ DIRECTORY        //
    //                                              //
    // ///////////////////////////////////////////////
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("There is an error in fs.state: ", err);
            response.statusCode = 404;
            return response.end();
        }
        //////////////////////////////////////////////////
        //                                              //
        //                 IS IT A FILE?                //
        //                                              //
        // ///////////////////////////////////////////////
        if (stats.isFile()){
            console.log("This is a file! : ", filePath);
            //////////////////////////////////////////////////
            //                                              //
            //          Handling File Extention             //
            //                                              //
            // ///////////////////////////////////////////////
            const fileExtention = path.extname(filePath);
            console.log("The file type is: ", fileExtention);

            //////////////////////////////////////////////////
            //                                              //
            //           READING AND PIPING DATA            //
            //                If it is a file               //
            // ///////////////////////////////////////////////
            //READING THE RESPONSE
            const readDataStream = fs.createReadStream(filePath);
            //SET HEADERS
            response.setHeader ("Content-Type", `${contentType[fileExtention]}`);
            //PIPING THE RESPONSE
            readDataStream.pipe(response);

            //ERROR CATCHING IN READ STREAM
            readDataStream.on('error', err => {
                response.statusCode = 500;
                console.log("Error on reading data stream: ", err);
            });

        //////////////////////////////////////////////////
        //                                              //
        //        IF NOT a FILE, it's a Directory       //
        //                                              //
        // ///////////////////////////////////////////////
        } else {
            console.log("This is a Directory :", filePath);

            //////////////////////////////////////////////////
            //                                              //
            //     Directory with / gets served index       //
            //                                              //
            // ///////////////////////////////////////////////
            if (request.url.endsWith('/')) {
                //READING THE RESPONSE
                const readDataStream = fs.createReadStream(filePath + '/index.html');
                //SET HEADERS
                response.setHeader('Content-Type', 'text/html');
                //PIPING THE RESPONSE
                readDataStream.pipe(response);

                //ERROR CATCHING IN READ STREAM
                readDataStream.on('error', err => {
                    response.statusCode = 500;
                    console.log("Error on reading Data Stream (Directory) : ", err);
                });
                //////////////////////////////////////////////////
                //                                              //
                //   Directory without  / gets redirected with  //
                //                / appended                    //
                // ///////////////////////////////////////////////
            } else {
                response.setHeader('Location', request.url + '/');
                response.statusCode = 302;
                return response.end();
            }
        }
    });
}).listen(8080, () => {console.log("Portfolio Server is up and running! ");});
