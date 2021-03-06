const chalk = require ('chalk');
const http = require('http');
const querystring = require('querystring');

// console.log(chalk.cyan("I am using Chalk with Cyan Text Color"));
// console.log(chalk.magenta('I am using Chalk with Magenta Text Color'));
// console.log(chalk.bgRed(chalk.cyan("Whoaaaa This is cool to have red background")));






const server = http.createServer((req, res)=>{

    req.on('error', err => console.log('reg err: ', err));
    res.on('error', err => console.log('res err: ', err));


    if (req.method === 'GET') {
        res.write(`
            <!doctype html>
            <html>
                <title>Colors</title>
                <form method="POST">
                    <input type="text" name="first" placeholder="first name">
                    <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                    </select>
                    <button type="submit">Go</button>
                </form>
            </html>
            `);
        res.end();

    }
    if (req.method === 'POST' ){
        let body = "";

        req.on('data', chunk =>{
            body += chunk;
        });

        req.on('end', () => {
            console.log("body before parsed: ", body);
            //name and value attribute above (in html) is SUPER important -
            //how we send info to the server
            let parsed = querystring.parse(body);

            console.log("parsed body: ", parsed);

            res.setHeader('content-type', 'text/html');
            res.statusCode= 200;
            res.end(`
                <p style='color:red'> Hello ${parsed.first}</p>
                `);


        });

    }
});
server.listen(8080, ()=> console.log("Server is listening ..."));
