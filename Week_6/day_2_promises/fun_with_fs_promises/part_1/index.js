let {readdir, stat} = require('fs');
const { promisify } = require('util');

const myPath = `${__dirname}/files`;

readdir = promisify(readdir);
stat = promisify(stat);

function logSizes (fullPath) {

    return readdir(fullPath, {withFileTypes: true, encoding: 'utf8'})
        .then(data => {
            let arr = [];
            for (let i = 0; i < data.length; i++) {

                if (data[i].isFile()) {
                    arr.push(
                        stat(`${fullPath}/${data[i].name}`)
                            .then( stats => {
                                console.log(`${fullPath}/${data[i].name}: ${stats.size} bytes`);
                            })
                    );
                } else if (data[i].isDirectory()) {
                    const newDirectory = `${fullPath}/${data[i].name}`;
                    arr.push(logSizes(newDirectory));
                }
            }
            return Promise.all(arr);
        }).catch(err => console.log("Err in FS files: ", err));
}

logSizes(myPath).then( () => console.log("DONE"));
