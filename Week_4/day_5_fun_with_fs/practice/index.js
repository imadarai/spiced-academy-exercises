const fs = require ('fs');

const myPath = __dirname;


//////////////////////////////////////////////////
//                                              //
//          HOW TO WRITE A FILE                 //
//                                              //
//////////////////////////////////////////////////
/////////writeFile (asynchronouse method)/////////
//////////////////////////////////////////////////
// const myText = "Let's write our first file with Javascript";


//fs.writeFile(pathForWhereToCreateAFile, contentOfMyFile, callBackFunction );
// fs.writeFile(myPath + "/my-first-file.txt", myText, (err) => {
//     if (err) {
//         console.log("Err in writeFile: ", err);
//     }
//     console.log('writeFile Function worked!');
// });
////any code I write here will nto wait for writeFile to finish




/////////writeFile (synchronouse method)/////////
//////////////////////////////////////////////////
// const obj = {
//     name: "allSpice",
//     favFilm : ["Big L", "Little R", "Terminator"]
// };
//
// fs.writeFileSync(
//     `${myPath}/my-new-file.json`,
//     JSON.stringify(obj, null, 4)
// );


//////////////////////////////////////////////////
//                                              //
//        Reading Directories ....readdir       //
//                                              //
//////////////////////////////////////////////////
///////////readdir (asynchronouse method)/////////
//////////////////////////////////////////////////
//fs.readdir(Path to look up, an object,callback error and files );
// fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
//     console.log(myPath);
//     if (err){
//         console.log('Err in reddir: ', err);
//     }
//     console.log("Files: ", files);
//     for (let i = 0; i < files.length; i++) {
//         console.log("Files[i] : ", files[i]);
//         console.log("Files[i].isfile : ", files[i].isFile());
//     }
// });


// console.log('DONE!!!');

//////////////////////////////////////////////////
/////////readdir    (synchronouse method)/////////
//////////////////////////////////////////////////

// const myInfo = fs.readdirSync(myPath, {withFiletypes: true});
//
// console.log(myInfo);
//
// console.log('Done!');


//////////////////////////////////////////////////
//                                              //
//        fs.Stat - Stats of a while            //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////fs.Stat   (asynchronouse method)/////////
//////////////////////////////////////////////////

// const myInfo = fs.readdirSync(myPath, {withFiletypes: true});
//
// console.log(myInfo[1]);
//
// fs.stat(`${myPath}/index.js`, (err, stats) =>{
//     if(err){
//         console.log("Err is: ", err);
//     }
//     // console.log("stats: ", stats);
//     console.log("File Size: ", stats.size);
//
// });

//////////////////////////////////////////////////
/////////fs.Stat   (synchronouse method)/////////
//////////////////////////////////////////////////

// const myStat = fs.statSync(`${myPath}/my-first-file.txt`);
// console.log("myStat: ", myStat);


//////////////////////////////////////////////////
//                                              //
//        fs.readFile - Read a File            //
//                                              //
//////////////////////////////////////////////////
/////////fs.Stat   (asynchronouse method)/////////
//////////////////////////////////////////////////

// fs.readFile(`${myPath}/fun_with_fs/index.html/`, 'utf8' ,(err, data) => {
//     if (err){
//         console.log('err in readFile: ', err);
//     }
//
//     console.log("data: ", data);
//
// });

//////////////////////////////////////////////////
//////fs.readFileSync(synchronouse method)////////
//////////////////////////////////////////////////

// const myFile = fs.readFileSync(__dirname + '/my-first-file.txt', 'utf8');
// console.log("myFile: ", myFile);












////
///
