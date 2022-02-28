const os = require('os');
const path = require('path');

// console.log("User Info",os.userInfo());
// console.log("Up Time in seconds",os.uptime());
// console.log("Free Memory in bytes",os.freemem());
// console.log("Total Memory in bytes",os.totalmem());


// console.log("The new path is ",path.join("home/user/desktop/training"));

const {readFileSync, writeFileSync, appendFileSync, unlinkSync} = require('fs');

writeFileSync('test.txt','This is the test file');
// appendFileSync('./test.txt', ' Appended message');

writeFileSync('./test.txt',' Just Now', {flag:'a'});
const readOp = readFileSync('./test.txt', 'utf-8');

unlinkSync('./test.txt');
console.log(readOp);
