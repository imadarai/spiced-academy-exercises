const fs = require('fs');
const myPath = `${__dirname}/files`;



//////////////////////////////////////////////////
//                                              //
//          CREATING AND STORING IN JASON       //
//                                              //
// ///////////////////////////////////////////////
var convertToJSON = JSON.stringify(mapSizes(myPath), null, 4);

fs.writeFileSync('data.json', convertToJSON);



//////////////////////////////////////////////////
//                                              //
//             Function mapSizes                //
//                                              //
// ///////////////////////////////////////////////
function mapSizes (fullPath) {

    let data = fs.readdirSync(fullPath, {withFileTypes: true, encoding : "utf8"});

    let newObj = {};

    if (data){
        for (var i = 0; i < data.length; i++) {

            if(data[i].isFile()){
                let size = fs.statSync(`${fullPath}/${data[i].name}`).size;
                newObj[data[i].name] = size;

            } else if (data[i].isDirectory()){
                newObj[data[i].name] = mapSizes(`${fullPath}/${data[i].name}`);

            } else {
                console.log("My friend, you must be lost ...");
            }

        }
    } else {
        console.log(data);
    }
    return newObj;
}

mapSizes(myPath);
