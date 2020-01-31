const fs = require('fs');
const myPath = `${__dirname}/files`;

logSizes (myPath);

function logSizes (fullPath) {

    fs.readdir(fullPath, {withFileTypes: true, encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.log("There is an Data Error: ", err);
        }
        else {

            for (let i = 0; i < data.length; i++) {

                if (data[i].isFile()) {
                    fs.stat(`${fullPath}/${data[i].name}`, (err, stats) =>{
                        if (err){
                            console.log("Err while trying to read File Stats: ", err);
                        } else {
                            console.log(`${fullPath}/${data[i].name}: ${stats.size} bytes`);
                        }
                    });
                    ///
                } else if (data[i].isDirectory()) {

                    const newDirectory = `${fullPath}/${data[i].name}`;
                    logSizes(newDirectory);

                } else {
                    console.log("My friend, you must be lost ...");
                }
            }
        }
    });
}
