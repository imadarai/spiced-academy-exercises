const url = require('url');
const queryString = require('querystring');
//Grabbing the URL
const link = process.argv[2];
///Parsing my URLor const LINK:
const parsedUrl = url.parse(link);



const properties = ["protocol", "host", "hostname", "port", "pathname", "query"];

for (let i = 0; i < properties.length; i++) {
    console.log(`The ${properties[i]} is ${parsedUrl[properties[i]]}`);
}
if (parsedUrl.query) {

    const grabAB = queryString.parse(parsedUrl.query);
    for (const i in grabAB) {
        console.log(`The value of parameter ${i} is ${grabAB[i]}`);
    }
}
