// const fs = require('fs');
// fs.writeFileSync("Hello.txt","Hi from my side!!");
// const gs = require('fs').writeFileSync;
// gs("Hello2.txt","WOW!!");
// console.log("-->>",__dirname);
// console.log("-->>",__filename);


//creating server
const http = require('http');
    //arrow function
    function test(a){
        return a*100;
    }
    //
    const test = (a) => a*100;

const contentHere = (req, res) => {
    res.write("<h1>Hello, from Debayan!!</h1>");
    res.end();
}

http.createServer(contentHere).listen(7530);
// http.createServer((req, res) =>{
//     res.write("<h1>Hello from Debayan!!</h1>");
//     res.end();
// }).listen(7530);