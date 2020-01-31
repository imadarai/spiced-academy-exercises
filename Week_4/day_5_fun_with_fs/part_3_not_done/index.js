const fs = require('fs');
const myPath = `${__dirname}/files`;
var files;


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
function readDir (fullPath) {
    fs.readdir(fullPath, {withFileTypes: true, encoding : "utf8"}, (err, files) => {
        if (err){
            console.log("The Errror for readdir is: ", err);
        }
        else {
            console.log("My directory data is: ", files);
        }

        return files;
    });
}

function getSize (fullPath){
    fs.stat (fullPath, (err, stats) =>{
        if(err){
            console.log("Error on stats is: ", stats);
        } else (
            console.log("My stats are: ", stats);
        )
    });
}

function getSzie (fullPath){
    fs.stat (fullPath.)
}




// function mapSizes (fullPath) {
//
//     readDir(fullPath);
//
//     let newObj = {};
//
//     if (files){
//         for (var i = 0; i < files.length; i++) {
//
//             if(files[i].isFile()){
//
//                 newObj[files[i].name] = size;
//
//             } else if (files[i].isDirectory()){
//                 newObj[files[i].name] = mapSizes(`${fullPath}/${files[i].name}`);
//
//             } else {
//                 console.log("My friend, you must be lost ...");
//             }
//
//         }
//     } else {
//         console.log(files);
//     }
//     return newObj;
// }
//
// mapSizes(myPath);
