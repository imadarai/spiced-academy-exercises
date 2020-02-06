const fs = require('fs');

const allProjects = fs.readdirSync(__dirname + '/projects');

const listProjects = () => `
    <!doctype html>
    <title>Imad's Portfolio</title>
    <h1>Imad's Portfolio at Spiced Academy</h1>
    <ul>
        ${allProjects.map( listItems => `<li><a href="${listItems}">${listItems}</a>`).join('')}
    </ul>
`;

module.exports = listProjects;
