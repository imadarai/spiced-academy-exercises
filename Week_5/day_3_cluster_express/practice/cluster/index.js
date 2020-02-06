const http = require('http');
const cp = require('child_process');

// cp.exec('ls funkychicken', function(err, stdout, stderr){
//     console.log(
//         `stdout: ${stdout}
//          stderr: ${stderr}`
//     );
//
// });

http.createServer((req, res) =>{
    res.end(
        `<doctyle html>
        <title>Welcome</title>
        <h1>Welcome</h1>`
    );

}).listen(8080, ()=> console.log("I'm listening"));
